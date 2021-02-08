const credutil = require('forkoff-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('forkoff-shared/services/mysql.js');
const mysql = new MySQL();

const UploadFileService = require('forkoff-shared/services/uploadfile');
const upload = new UploadFileService();

const DevGameService = require('forkoff-shared/services/devgame');
const devgame = new DevGameService();

const { GeneralError } = require('forkoff-shared/util/errorhandler');

module.exports = class DevGameAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
    }


    routes() {



        this.router.get('/dev/find/game/:gameid', this.devFindGame.bind(this));
        this.router.post('/dev/create/game', this.devCreateGame.bind(this));
        this.router.post('/dev/update/game', this.devUpdateGame.bind(this));
        this.router.post('/dev/update/game/images', this.devUpdateGameImages.bind(this));
        return this.router;
    }



    async devFindGame(req, res, next) {
        let game = { id: req.params.gameid };

        try {
            if (!game) {
                throw new GeneralError("E_MISSING_DEVGAME");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.findGame(game, sessionUser);
            if (!pushedGame) {
                throw new GeneralError("E_GAME_NOTFOUND");
            }

            res.json(pushedGame);
        }
        catch (e) {
            next(e);
        }

    }

    async devUpdateGame(req, res, next) {
        let game = req.body;

        try {
            if (!game) {
                throw new GeneralError("E_MISSING_DEVGAME");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.updateGame(game, sessionUser);
            if (!pushedGame) {
                throw new GeneralError("E_CREATEFAILED_GAME");
            }

            if (pushedGame.ecode)
                res.status(400);
            res.json(pushedGame);
        }
        catch (e) {
            next(e);
        }

    }

    cbImageMeta(req, file, cb) {
        cb(null, { filename: file.originalname });
    }

    cbImageKey(req, file, cb) {
        let key = file.originalname;

        let err = null;

        cb(err, key)
    }
    async devUpdateGameImages(req, res, next) {
        // let game = req.body;

        try {
            let middleware = upload.middleware('fivesecondgames', ['image/jpeg', 'image/png'], this.cbImageMeta, this.cbImageKey);
            middleware = middleware.array('images', 4);

            middleware(req, res, function (err) {
                if (err) {
                    // An unknown error occurred when uploading.
                    res.status(400).json({ ecode: "E_UPLOAD_FAILED" });
                    return;
                }

                let files = req.files;
                files = files.map(v => v.key);
                res.json({ images: files })
                return;
            })
        }
        catch (e) {
            next(e);
        }
    }

    async devCreateGame(req, res, next) {
        let game = req.body;

        try {
            if (!game) {
                throw new GeneralError("E_MISSING_DEVGAME");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.createOrUpdateGame(game, sessionUser);
            if (!pushedGame) {
                throw new GeneralError("E_CREATEFAILED_GAME");
            }

            if (pushedGame.ecode)
                res.status(400);
            res.json(pushedGame);
        }
        catch (e) {
            next(e);
        }

    }


}