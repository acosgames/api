var fs = require('fs')
const ObjectStorageService = require("shared/services/objectstorage");
const s3 = new ObjectStorageService();

function getDestination(req, file, cb) {
    cb(null, './' + file.originalname)
}

function MyCustomStorage(opts) {
    this.getDestination = (opts.destination || getDestination)
}

const SERVER_BUCKET = 'acospriv';
const CLIENT_BUCKET = 'acospub';


MyCustomStorage.prototype._handleFile = function _handleFile(req, file, cb) {
    this.getDestination(req, file, async function (err, path) {
        if (err) return cb(err)


        let game = req.game;

        let Bucket = '';
        let ContentType = '';
        let Key = '';
        let ACL = '';

        if (file.fieldname == 'server') {
            var filename = 'server.bundle.' + game.version + '.js';
            Key = game.game_slug + '/' + filename;

            Bucket = SERVER_BUCKET;
            ContentType = 'application/javascript';
            ACL = 'private';
        }
        else if (file.fieldname == 'db') {
            var filename = "server.db." + game.version + '.json';
            Key = game.game_slug + '/' + filename;

            Bucket = SERVER_BUCKET;
            ContentType = 'application/json';
            ACL = 'private';
        }
        else if (file.fieldname == 'client') {
            var filename = 'client.bundle.' + game.version + '.js';
            Key = 'g/' + game.game_slug + '/client/' + filename;

            Bucket = CLIENT_BUCKET;
            ContentType = 'application/javascript';
            ACL = 'public-read';
        }

        let metadata = { fieldName: file.fieldname, 'Content-Type': ContentType, 'Content-Encoding': 'gzip', 'b2-content-encoding': 'gzip' }

        try {
            let uploader = s3.upload({
                Bucket,
                Key,
                Body: file.stream,
                ContentType,
                ACL,
                metadata
            },
                function (err, data) {
                    if (err) {
                        cb(err, data)
                        return;
                    }
                    console.log('S3 Upload Completed: ', err, data);
                    cb(null, data)
                })

            uploader.on('httpUploadProgress', function (progress) {
                req.res.write(JSON.stringify(progress) + '\n');
                console.log('progress:', progress);
            });


        }
        catch (e) {
            console.error(e);
        }



        // file.stream.pipe(outStream)
        // outStream.on('error', cb)
        // outStream.on('finish', function () {

        // })
    })
}

MyCustomStorage.prototype._removeFile = function _removeFile(req, file, cb) {
    //fs.unlink(file.path, cb)
}

module.exports = function (opts) {
    return new MyCustomStorage(opts)
}