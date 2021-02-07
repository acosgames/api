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

        let gameupload = upload.middleware('fivesecondgames', ['image/jpeg', 'image/png']);

        this.router.get('/dev/find/game/:gameid', this.devFindGame);
        this.router.post('/dev/create/game', this.devCreateGame);
        this.router.post('/dev/update/game/images', this.devUpdateGameImages);
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

    async devUpdateGameImages(req, res, next) {
        let game = req.body;

        try {
            if (!game) {
                throw new GeneralError("E_GAME_INVALID");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.updateGame(game, sessionUser);
            if (!pushedGame) {
                throw new GeneralError("E_GAME_UPDATEFAILED");
            }

            if (pushedGame.ecode)
                res.status(400);
            res.json(pushedGame);
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