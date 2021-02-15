const credutil = require('forkoff-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('forkoff-shared/services/mysql.js');
const mysql = new MySQL();

const UploadFileService = require('forkoff-shared/services/uploadfile');
const upload = new UploadFileService();

const DevGameService = require('forkoff-shared/services/devgame');
const devgame = new DevGameService();

const { genShortId } = require('forkoff-shared/util/idgen');

const { GeneralError } = require('forkoff-shared/util/errorhandler');


module.exports = class DevGameAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
    }


    routes() {
        this.router.get('/dev/find/game/:gameid', this.devFindGame.bind(this));

        this.router.post('/dev/create/client', this.devCreateGame.bind(this));


        this.router.post('/dev/create/game', this.devCreateGame.bind(this));
        this.router.post('/dev/update/game', this.devUpdateGame.bind(this));
        this.router.post('/dev/update/game/images/:gameid', this.devUpdateGameImages.bind(this));
        return this.router;
    }

    async devFindGame(req, res, next) {
        let game = { id: req.params.gameid };

        try {
            if (!game) {
                throw new GeneralError("E_DEVGAME_MISSING");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.findGame(game, sessionUser);
            if (!pushedGame) {
                throw new GeneralError("E_DEVGAME_NOTFOUND");
            }

            res.json(pushedGame);
        }
        catch (e) {
            next(e);
        }

    }

    async devFindClient(req, res, next) {
        let client = { id: req.params.gameid };

        try {
            if (!client) {
                throw new GeneralError("E_CLIENT_MISSING");
            }
            let sessionUser = req.session.user;

            let pushedClient = await devgame.findClient(client, sessionUser);
            if (!pushedClient) {
                throw new GeneralError("E_CLIENT_NOTFOUND");
            }

            res.json(pushedClient);
        }
        catch (e) {
            next(e);
        }

    }

    async devFindServer(req, res, next) {
        let server = { id: req.params.gameid };

        try {
            if (!server) {
                throw new GeneralError("E_SERVER_MISSING");
            }
            let sessionUser = req.session.user;

            let pushedServer = await devgame.findServer(server, sessionUser);
            if (!pushedServer) {
                throw new GeneralError("E_SERVER_NOTFOUND");
            }

            res.json(pushedServer);
        }
        catch (e) {
            next(e);
        }

    }

    async devUpdateClient(req, res, next) {
        let client = req.body;

        if (typeof client.version == 'string')
            client.version = parseInt(client.version);

        try {
            if (!client) {
                throw new GeneralError("E_CLIENT_MISSING");
            }
            let sessionUser = req.session.user;

            let pushed = await devgame.updateClient(client, sessionUser);
            if (!pushed) {
                throw new GeneralError("E_CLIENT_CREATEFAILED");
            }

            if (pushed.ecode)
                res.status(400);
            res.json(pushed);
        }
        catch (e) {
            next(e);
        }

    }

    async devUpdateServer(req, res, next) {
        let server = req.body;

        if (typeof server.version == 'string')
            server.version = parseInt(server.version);

        try {
            if (!server) {
                throw new GeneralError("E_SERVER_MISSING");
            }
            let sessionUser = req.session.user;

            let pushed = await devgame.updateServer(server, sessionUser);
            if (!pushed) {
                throw new GeneralError("E_SERVER_CREATEFAILED");
            }

            if (pushed.ecode)
                res.status(400);
            res.json(pushed);
        }
        catch (e) {
            next(e);
        }

    }

    async devUpdateGame(req, res, next) {
        let game = req.body;

        if (typeof game.version == 'string')
            game.version = parseInt(game.version);

        try {
            if (!game) {
                throw new GeneralError("E_DEVGAME_MISSING");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.updateGame(game, sessionUser);
            if (!pushedGame) {
                throw new GeneralError("E_DEVGAME_CREATEFAILED");
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
        cb(null, null);
    }

    cbImageKey(req, file, cb) {
        if (!req.session.user) {
            let err = new GeneralError('E_USER_NOTAUTHORIZED');
            cb(err, 'failed')
            return;
        }

        var filename = file.originalname;
        let ext = filename.split('.').pop();

        if (filename == ext)
            ext = 'jpg';

        filename = genShortId(4) + '.' + ext;
        filename = '1.' + ext;

        let gameid = req.body.gameid;
        let user = req.session.user;

        let key = gameid + '/preview/' + filename;

        cb(null, key)
    }
    async devUpdateGameImages(req, res, next) {
        // let game = req.body;

        try {
            let uploadMiddleware = upload.middleware('fivesecondgames', ['image/jpeg', 'image/png'], this.cbImageMeta, this.cbImageKey);
            let imageMiddleware = uploadMiddleware.array('images', 1);

            let gameid = req.params.gameid;
            let user = req.session.user;

            let game = await devgame.findGame({ gameid }, user);

            let deleted = await upload.deletePreviews(game);

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    reject(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }

                let gameid = req.body.gameid;
                let user = req.session.user;
                let files = req.files;
                files = files.map(v => v.key.replace(gameid + '/preview/', ''));

                let response = await devgame.updatePreviewImages(gameid, user, files);
                console.log(response.data);

                res.json({ images: files });
                return
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }

    }


    async devCreateClient(req, res, next) {
        let client = req.body;

        try {
            if (!client) {
                throw new GeneralError("E_MISSING_DEVCLIENT");
            }
            let sessionUser = req.session.user;

            let pushedClient = await devgame.createOrUpdateClient(client, sessionUser);
            if (!pushedClient) {
                throw new GeneralError("E_CREATEFAILED_CLIENT");
            }

            if (pushedClient.ecode)
                res.status(400);
            res.json(pushedClient);
        }
        catch (e) {
            next(e);
        }

    }

    async devCreateServer(req, res, next) {
        let server = req.body;

        try {
            if (!server) {
                throw new GeneralError("E_MISSING_DEVSERVER");
            }
            let sessionUser = req.session.user;

            let pushedServer = await devgame.createOrUpdateServer(server, sessionUser);
            if (!pushedServer) {
                throw new GeneralError("E_CREATEFAILED_SERVER");
            }

            if (pushedServer.ecode)
                res.status(400);
            res.json(pushedServer);
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