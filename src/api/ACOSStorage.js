var fs = require("fs");
const ObjectStorageService = require("shared/services/objectstorage");
const s3 = new ObjectStorageService();

const { PassThrough, Readable, Transform } = require("stream");
const zlib = require("zlib");
const Busboy = require("busboy");

const mimetypes = require("shared/util/mimetypes");
const { genShortId } = require("shared/util/idgen");

const SERVER_BUCKET = "acospriv";
const CLIENT_BUCKET = "acospub";

async function pipe(tap, sink) {
    return new Promise((resolve, reject) => {
        tap.pipe(sink, { end: false });
        tap.on("end", resolve);
        tap.on("error", reject);
    });
}

function S3UploadGameBundles(req, res, cb) {
    return new Promise(async (resolve, reject) => {
        const headers = req.headers;
        const busboy = Busboy({ headers });

        const MAXLENGTH = 30 * 1024 * 1024;
        let totalLength = 0;
        let totalCount = 0;
        let uploaders = {};
        let passthroughs = {};
        let s3responses = [];

        let game = req.game;

        let files = [];
        let existingFiles = {};
        try {
            files = await s3
                .list({
                    Bucket: CLIENT_BUCKET,
                    Delimiter: "/",
                    Prefix: "g/" + game.game_slug + "/client/assets/",
                })
                .promise();
            files.Contents.forEach((f) => {
                let fname = f.Key.split("/").pop();
                existingFiles[fname] = f;
            });

            console.log(existingFiles);
        } catch (e) {
            let errorMsg = "[ERROR] Invalid game: " + game.game_slug;
            reject(errorMsg);
            return;
        }
        // you may need to add cleanup logic using 'busboy.on' events
        busboy.on("error", (err) => reject(err));
        // busboy.on('')
        busboy.on(
            "file",
            async function (fieldName, fileStream, info, encoding, mimeType) {
                let Bucket = "";
                let ContentType = "";
                let Key = "";
                let ACL = "";
                let filename = info.filename;
                let ContentLength = req.filesizes[filename] || 0;
                var fileExt = filename.split(".").pop();
                let Metadata = null;
                let isGzip = false;
                mimeType =
                    mimetypes["." + fileExt] || "application/octet-stream";

                let pass = new PassThrough();
                let prepass = new PassThrough();

                if (fieldName == "server") {
                    filename = "server.bundle." + game.version + ".js";
                    Key = game.game_slug + "/" + filename;
                    Bucket = SERVER_BUCKET;
                    ContentType = "application/javascript";
                    ACL = "private";
                    Metadata = {
                        fieldName,
                        filename,
                        "Content-Type": ContentType,
                    };

                    fileStream.pipe(prepass);
                } else if (fieldName == "db") {
                    filename = "server.db." + game.version + ".json";
                    Key = game.game_slug + "/" + filename;
                    Bucket = SERVER_BUCKET;
                    ContentType = "application/json";
                    ACL = "private";
                    Metadata = {
                        fieldName,
                        filename,
                        "Content-Type": ContentType,
                    };

                    fileStream.pipe(prepass);
                } else if (fieldName == "client") {
                    filename = "client.bundle." + game.version + ".js";
                    Key = "g/" + game.game_slug + "/client/" + filename;
                    Bucket = CLIENT_BUCKET;
                    ContentType = "application/javascript";
                    ACL = "public-read";
                    Metadata = {
                        fieldName,
                        filename,
                        "Content-Type": ContentType,
                    };

                    const sourcemapString = `//# sourceMappingURL=${filename}.map`;
                    // const sourcemapStream = Readable.from(sourcemapString);

                    const replaceStringStream = (str) =>
                        new Transform({
                            transform(chunk, enc, cb) {
                                let chunkStr = chunk.toString();
                                if (
                                    chunkStr.indexOf(
                                        "//# sourceMappingURL=client.bundle.js.map"
                                    ) > -1
                                ) {
                                    chunkStr = chunkStr.replace(
                                        "//# sourceMappingURL=client.bundle.js.map",
                                        sourcemapString
                                    );
                                    cb(null, chunkStr);
                                } else {
                                    cb(null, chunk);
                                }
                            },
                            // flush(cb) {
                            //     // this.push(str);
                            //     cb(null);
                            // },
                            // setTimeout(() => {
                            // }),
                        });

                    let sourcemapStream = replaceStringStream(sourcemapString);
                    // fileStream.pipe(sourcemapStream).pipe(prepass);

                    fileStream.pipe(sourcemapStream).pipe(prepass);
                    // sourcemapStream.pipe(prepass);
                    // await pipe(fileStream, prepass);
                    // await pipe(sourcemapStream, prepass);
                } else if (fieldName == "clientmap") {
                    filename = "client.bundle." + game.version + ".js.map";
                    Key = "g/" + game.game_slug + "/client/" + filename;
                    Bucket = CLIENT_BUCKET;
                    ContentType = "application/javascript";
                    ACL = "public-read";
                    Metadata = {
                        fieldName,
                        filename,
                        "Content-Type": ContentType,
                    };

                    fileStream.pipe(prepass);
                } else {
                    //filename = filename;
                    if (filename.endsWith(".css")) {
                        filename = "client.bundle." + game.version + ".css";
                    }

                    Key = "g/" + game.game_slug + "/client/assets/" + filename;

                    Bucket = CLIENT_BUCKET;
                    ContentType = mimeType;
                    ACL = "public-read";
                    isGzip = false;
                    Metadata = { "Content-Type": ContentType };

                    fileStream.pipe(prepass);
                }

                if (filename in existingFiles) {
                    let f = existingFiles[filename];
                    cb(null, { key: f.Key, size: f.Size, exists: true });
                    console.log("S3 File exists, skipping: ", info);

                    if (process.platform.indexOf("win") > -1) {
                        let wstream = fs.createWriteStream("\\\\.\\NUL");
                        // fileStream.destroy();
                        prepass.pipe(wstream);
                    } else {
                        let wstream = fs.createWriteStream("/dev/null");
                        // fileStream.destroy();
                        prepass.pipe(wstream);
                    }
                    return;
                }

                pass.on("data", (chunk) => {
                    totalLength += chunk.byteLength;

                    if (totalLength > MAXLENGTH) {
                        let errorMsg =
                            "[ERROR] Exceeded upload limit: " +
                            (totalLength / 1000).toFixed(2) +
                            " kb";
                        pass.destroy(errorMsg);

                        for (const k in uploaders) {
                            if (uploaders[k]) uploaders[k].abort();
                        }
                        reject(errorMsg);
                    }
                    //console.log(chunk);
                });
                totalCount++;

                let params = {
                    Bucket,
                    Key,
                    Body: pass,
                    ContentType,
                    ACL,

                    // metadata
                };

                if (isGzip) {
                    params.ContentEncoding = "gzip";
                }

                if (Metadata) params.Metadata = Metadata;

                let uploader = await s3.upload(params);

                uploader.on("httpUploadProgress", function (progress) {
                    if (cb) {
                        cb(null, progress);
                    }
                });

                console.log(
                    "S3 Uploading ",
                    filename,
                    ContentLength,
                    ContentType
                );
                uploader
                    .promise()
                    .then((data) => {
                        // console.log('S3 Upload Completed: ', data.Key);
                        if (cb) cb(null, data);
                        totalCount--;
                        s3responses.push(data);

                        if (filename in uploaders) {
                            delete uploaders[filename];
                        }
                        if (totalCount <= 0) resolve(s3responses);
                    })
                    .catch((err) => {
                        reject(err);
                    });

                uploaders[filename] = uploader;

                prepass.pipe(pass);
                // if (isGzip) {
                //     let zipped = zlib.createGzip();
                //     fileStream.pipe(zipped).pipe(pass);
                // } else {
                //     fileStream.pipe(pass);
                // }
            }
        );
        req.pipe(busboy);
    });
}

async function uploadByStreamGzip(Bucket, Key, data) {
    return new Promise((rs, rj) => {
        try {
            let params = {
                Bucket,
                Key,
                Body: data,
                ACL: "public-read",
                ContentType: "application/javascript",
                // ContentEncoding: 'gzip'
            };
            var options = { partSize: 10 * 1024 * 1024, queueSize: 1 };

            s3.upload(params, options, function (err, data) {
                if (err) {
                    console.log("Error", err);
                    rj(err);
                }
                if (data) {
                    console.log("Upload Success", data.Location);
                    rs(data);
                }
            });
        } catch (e) {
            console.error(e);
        }
    });
}

async function deletePreviews(game) {
    // var params = {
    //     Bucket: 'acospub',
    //     Prefix: gameid + '/preview/'
    // };
    try {
        // let data = await this.s3.listObjects(params).promise();

        if (!game.preview_images) return [];
        // console.log(data);
        let deleted = [];
        let previews = game.preview_images.split(",");

        for (var i = 0; i < previews.length; i++) {
            let filename = previews[i];
            var params2 = {
                Bucket: "acospub",
                Key: "g/" + game.game_slug + "/preview/" + filename,
            };
            let del = await s3.deleteObject(params2).promise();
            console.log(del);
            deleted.push(del);
        }

        return deleted;
    } catch (e) {
        console.error(e, e.stack);
    }
    return [];
}

function S3UploadGameImage(req, res, cb) {
    return new Promise(async (resolve, reject) => {
        const headers = req.headers;
        const busboy = Busboy({ headers });

        const MAXLENGTH = 30 * 1024 * 1024;
        let totalLength = 0;
        let totalCount = 0;
        let uploaders = {};
        let passthroughs = {};
        let s3responses = [];

        let game = req.game;

        let files = [];
        // let existingFiles = {};
        // try {
        //     files = await s3.list({ Bucket: CLIENT_BUCKET, Delimiter: '/', Prefix: 'g/' + game.game_slug + '/client/assets/' }).promise();
        //     files.Contents.forEach(f => {
        //         let fname = f.Key.split('/').pop();
        //         existingFiles[fname] = f;
        //     });

        //     console.log(existingFiles);
        // }
        // catch (e) {
        //     let errorMsg = '[ERROR] Invalid game: ' + game.game_slug;
        //     reject(errorMsg)
        //     return;
        // }
        // you may need to add cleanup logic using 'busboy.on' events
        busboy.on("error", (err) => reject(err));
        // busboy.on('')
        busboy.on(
            "file",
            async function (
                fieldName,
                fileStream,
                fileName,
                encoding,
                mimeType
            ) {
                let hash = genShortId(6);

                let Bucket = "";
                let ContentType = "";
                let Key = "";
                let ACL = "";
                let filename = fileName.filename;
                // let ContentLength = req.filesizes[filename] || 0;
                var fileExt = filename.split(".").pop();
                let Metadata = null;
                let isGzip = false;
                mimeType =
                    mimetypes["." + fileExt] || "application/octet-stream";
                // if (fieldName == 'server') {
                //     filename = 'server.bundle.' + game.version + '.js';
                //     Key = game.game_slug + '/' + filename;
                //     Bucket = SERVER_BUCKET;
                //     ContentType = 'application/javascript';
                //     ACL = 'private';
                //     Metadata = { fieldName, filename, 'Content-Type': ContentType, 'Content-Encoding': 'gzip', 'b2-content-encoding': 'gzip' }
                // }
                if (fieldName == "images") {
                    //filename = filename;
                    Key =
                        "g/" +
                        game.game_slug +
                        "/preview/" +
                        hash +
                        "." +
                        fileExt;
                    req.files = [Key];
                    Bucket = CLIENT_BUCKET;
                    ContentType = mimeType;
                    ACL = "public-read";
                    isGzip = false;
                    Metadata = { "Content-Type": ContentType };
                }

                let pass = new PassThrough();

                // if (filename in existingFiles) {
                //     let f = existingFiles[filename];
                //     cb(null, { key: f.Key, size: f.Size, exists: true });
                //     console.log("S3 File exists, skipping: ", fileName);

                //     if (process.platform.indexOf("win") > -1) {
                //         let wstream = fs.createWriteStream("\\\\.\\NUL");
                //         // fileStream.destroy();
                //         fileStream.pipe(wstream);
                //     }
                //     else {
                //         let wstream = fs.createWriteStream('/dev/null');
                //         // fileStream.destroy();
                //         fileStream.pipe(wstream);
                //     }
                //     return;
                // }

                pass.on("data", (chunk) => {
                    totalLength += chunk.byteLength;

                    if (totalLength > MAXLENGTH) {
                        let errorMsg =
                            "[ERROR] Exceeded upload limit: " +
                            (totalLength / 1000).toFixed(2) +
                            " kb";
                        pass.destroy(errorMsg);

                        for (const k in uploaders) {
                            if (uploaders[k]) uploaders[k].abort();
                        }
                        reject(errorMsg);
                    }
                    //console.log(chunk);
                });
                totalCount++;

                let params = {
                    Bucket,
                    Key,
                    Body: pass,
                    ContentType,
                    ACL,

                    // metadata
                };

                if (isGzip) {
                    params.ContentEncoding = "gzip";
                }

                if (Metadata) params.Metadata = Metadata;

                let uploader = await s3.upload(params);

                uploader.on("httpUploadProgress", function (progress) {
                    if (cb) {
                        cb(null, progress);
                    }
                });

                console.log("S3 Uploading ", filename, ContentType);
                uploader
                    .promise()
                    .then((data) => {
                        // console.log('S3 Upload Completed: ', data.Key);
                        if (cb) cb(null, data);
                        totalCount--;
                        s3responses.push(data);

                        if (filename in uploaders) {
                            delete uploaders[filename];
                        }
                        if (totalCount <= 0) resolve(s3responses);
                    })
                    .catch((err) => {
                        reject(err);
                    });

                uploaders[filename] = uploader;

                fileStream.pipe(pass);
            }
        );
        req.pipe(busboy);
    });
}

module.exports = {
    S3UploadGameBundles,
    S3UploadGameImage,
    deletePreviews,
    uploadByStreamGzip,
};
