var fs = require('fs')
const ObjectStorageService = require("shared/services/objectstorage");
const s3 = new ObjectStorageService();

const { PassThrough } = require('stream');
const zlib = require('zlib');
const Busboy = require('busboy');

const mimetypes = require("shared/util/mimetypes");

const SERVER_BUCKET = 'acospriv';
const CLIENT_BUCKET = 'acospub';

function S3Upload(req, res, cb) {
    return new Promise(async (resolve, reject) => {
        const headers = req.headers;
        const busboy = Busboy({ headers });

        const MAXLENGTH = (30 * 1024 * 1024);
        let totalLength = 0;
        let totalCount = 0;
        let uploaders = {};
        let passthroughs = {};
        let s3responses = [];

        let game = req.game;

        let files = [];
        let existingFiles = {};
        try {
            files = await s3.list({ Bucket: CLIENT_BUCKET, Delimiter: '/', Prefix: 'g/' + game.game_slug + '/client/assets/' }).promise();
            files.Contents.forEach(f => {
                let fname = f.Key.split('/').pop();
                existingFiles[fname] = f;
            });

            console.log(existingFiles);
        }
        catch (e) {
            let errorMsg = '[ERROR] Invalid game: ' + game.game_slug;
            reject(errorMsg)
            return;
        }
        // you may need to add cleanup logic using 'busboy.on' events
        busboy.on('error', err => reject(err))
        // busboy.on('')
        busboy.on('file', async function (fieldName, fileStream, fileName, encoding, mimeType) {




            let Bucket = '';
            let ContentType = '';
            let Key = '';
            let ACL = '';
            let filename = fileName.filename;
            let ContentLength = req.filesizes[filename] || 0;
            var fileExt = filename.split('.').pop();
            let Metadata = null;
            let isGzip = true;
            mimeType = mimetypes['.' + fileExt] || 'application/octet-stream'
            if (fieldName == 'server') {
                filename = 'server.bundle.' + game.version + '.js';
                Key = game.game_slug + '/' + filename;
                Bucket = SERVER_BUCKET;
                ContentType = 'application/javascript';
                ACL = 'private';
                Metadata = { fieldName, filename, 'Content-Type': ContentType, 'Content-Encoding': 'gzip', 'b2-content-encoding': 'gzip' }
            }
            else if (fieldName == 'db') {
                filename = "server.db." + game.version + '.json';
                Key = game.game_slug + '/' + filename;
                Bucket = SERVER_BUCKET;
                ContentType = 'application/json';
                ACL = 'private';
                Metadata = { fieldName, filename, 'Content-Type': ContentType, 'Content-Encoding': 'gzip', 'b2-content-encoding': 'gzip' }
            }
            else if (fieldName == 'client') {
                filename = 'client.bundle.' + game.version + '.js';
                Key = 'g/' + game.game_slug + '/client/' + filename;
                Bucket = CLIENT_BUCKET;
                ContentType = 'application/javascript';
                ACL = 'public-read';
                Metadata = { fieldName, filename, 'Content-Type': ContentType, 'Content-Encoding': 'gzip', 'b2-content-encoding': 'gzip' }
            }
            else {
                //filename = filename;
                Key = 'g/' + game.game_slug + '/client/assets/' + filename;
                Bucket = CLIENT_BUCKET;
                ContentType = mimeType;
                ACL = 'public-read';
                isGzip = false;
                Metadata = { fieldName, filename, version: game.version, 'Content-Type': ContentType };
            }


            let pass = new PassThrough();

            if (filename in existingFiles) {
                let f = existingFiles[filename];
                cb(null, { key: f.Key, size: f.Size, exists: true });
                console.log("S3 File exists, skipping: ", fileName);

                if (process.platform.indexOf("win") > -1) {
                    let wstream = fs.createWriteStream("\\\\.\\NUL");
                    // fileStream.destroy();
                    fileStream.pipe(wstream);
                }
                else {
                    let wstream = fs.createWriteStream('/dev/null');
                    // fileStream.destroy();
                    fileStream.pipe(wstream);
                }
                return;
            }



            pass.on('data', (chunk) => {
                totalLength += chunk.byteLength;

                if (totalLength > MAXLENGTH) {
                    let errorMsg = '[ERROR] Exceeded upload limit: ' + (totalLength / 1000).toFixed(2) + ' kb';
                    pass.destroy(errorMsg);

                    for (const k in uploaders) {
                        if (uploaders[k])
                            uploaders[k].abort();
                    }
                    reject(errorMsg)
                }
                //console.log(chunk);
            })
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
                params.ContentEncoding = 'gzip';

            }

            if (Metadata)
                params.Metadata = Metadata;




            let uploader = await s3.upload(params);

            uploader.on('httpUploadProgress', function (progress) {
                if (cb) {
                    cb(null, progress);
                }

            });

            console.log("S3 Uploading ", filename, ContentLength, ContentType);
            uploader
                .promise()
                .then(data => {
                    // console.log('S3 Upload Completed: ', data.Key);
                    if (cb)
                        cb(null, data);
                    totalCount--;
                    s3responses.push(data);

                    if (filename in uploaders) {
                        delete uploaders[filename];
                    }
                    if (totalCount <= 0)
                        resolve(s3responses);
                })
                .catch(err => {
                    reject(err)
                })

            uploaders[filename] = uploader;

            if (Metadata) {
                let zipped = zlib.createGzip();
                fileStream.pipe(zipped).pipe(pass);
            } else {
                fileStream.pipe(pass);
            }
        })
        req.pipe(busboy)
    })
}



module.exports = S3Upload;
