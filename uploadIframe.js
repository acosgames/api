
const UploadFile = require('shared/services/uploadfile');
const upload = new UploadFile();

const { Readable } = require('stream');
const zlib = require('zlib');
const fs = require('fs');

function run() {

    let baseFilepath = './public/iframe.html';
    let filepath = baseFilepath + '.gz';

    let data = fs.readFileSync(baseFilepath);



    Readable.from([data])
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(filepath))
        .on("error", (error) => {
            // handle error
            console.error(error);
        })
        .on("finish", async () => {

            let fileStream = fs.createReadStream(filepath);
            let result = await upload.uploadByStreamGzipHtml('acospub', 'static/iframe.html', fileStream);
            console.log('Uploaded iframe.html to acospub: ', result);

            fs.unlinkSync(filepath);
            // handle success
        })




}

run();