const credutil = require('forkoff-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('forkoff-shared/services/mysql.js');
const mysql = new MySQL();

const UploadFileService = require('forkoff-shared/services/uploadfile');
const upload = new UploadFileService();

const DevGameService = require('forkoff-shared/services/devgame');
const devgame = new DevGameService();

module.exports = class DevGameAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
    }


    routes() {

        let gameupload = upload.middleware('fivesecondgames', ['image/jpeg', 'image/png']);

        this.router.post('/dev/create/game', this.devCreateGame);
        this.router.post('/dev/update/game/images', this.devUpdateGameImages);
        return this.router;
    }

    async devUpdateGameImages(req, res, next) {
        let game = req.body;
    }

    async devCreateGame(req, res, next) {
        let game = req.body;

        try {
            if (!game) {
                res.status(400).json({ ecode: "E_MISSING_DEVGAME" });
                return;
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.createOrUpdateGame(game, sessionUser);
            if (!pushedGame) {
                res.status(400).json({ ecode: "E_CREATEFAILED_GAME" });
                return;
            }

            if (pushedGame.ecode)
                res.status(400);
            res.json(pushedGame);
        }
        catch (e) {
            res.status(400).json(e);
        }

    }


}