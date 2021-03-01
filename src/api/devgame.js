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

        this.router.post('/dev/create/server/:gameid', this.apiDevCreateServer.bind(this));
        this.router.post('/dev/find/server/:gameid', this.apiDevFindServer.bind(this));

        this.router.get('/dev/games/:userid', this.apiDevGames.bind(this));

        this.router.post('/dev/create/client/:gameid', this.apiDevCreateClient.bind(this));
        this.router.post('/dev/find/client/:gameid', this.apiDevFindClient.bind(this));
        this.router.post('/dev/update/client/images/:clientid', this.apiDevUpdateClientImages.bind(this));
        this.router.post('/dev/update/client/bundle/:clientid', this.apiDevUpdateClientBundle.bind(this));
        this.router.get('/dev/find/game/:gameid', this.apiDevFindGame.bind(this));
        this.router.post('/dev/create/game', this.apiDevCreateGame.bind(this));
        this.router.post('/dev/update/game', this.apiDevUpdateGame.bind(this));
        this.router.post('/dev/update/game/images/:gameid', this.apiDevUpdateGameImages.bind(this));
        return this.router;
    }

    async apiDevUpdateClientBundle(req, res, next) {
        try {
            let uploadMiddleware = upload.middleware('fivesecondgames', ['text/javascript'], this.cbImageMeta, this.cbClientBundleKey);
            let imageMiddleware = uploadMiddleware.array('bundle', 1);

            let gameid = req.params.gameid;
            let clientid = req.params.clientid;
            let user = req.session.user;

            let clients = await devgame.findClient({ id: clientid }, user);
            if (!clients || clients.length == 0)
                return;

            let client = clients[0];

            req.devclient = client;

            //let deleted = await upload.deleteBundles(client);

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }

                let user = req.session.user;
                let files = req.files;
                files = files.map(v => v.key.replace(gameid + '/client/' + clientid + '/', ''));

                let response = await devgame.updateClientBundle(client, user, files);
                console.log(response);

                res.json(client);
                return
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }
    }

    async apiDevGames(req, res, next) {
        let userid = req.params.userid;

        try {
            if (!userid) {
                throw new GeneralError("E_USER_MISSING");
            }
            // let sessionUser = req.session.user;

            let userGames = await devgame.findGames(userid);
            if (!userGames) {
                throw new GeneralError("E_DEVGAMES_NOTFOUND");
            }

            res.json(userGames);
        }
        catch (e) {
            next(e);
        }

    }

    async apiDevFindGame(req, res, next) {
        let game = { id: req.params.gameid };

        try {
            if (!game) {
                throw new GeneralError("E_DEVGAME_MISSING");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.findGame(game);
            if (!pushedGame) {
                throw new GeneralError("E_DEVGAME_NOTFOUND");
            }

            res.json(pushedGame);
        }
        catch (e) {
            next(e);
        }

    }

    async apiDevFindClient(req, res, next) {
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

    async apiDevFindServer(req, res, next) {
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

    async apiDevUpdateGame(req, res, next) {
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

    cbClientBundleKey(req, file, cb) {
        if (!req.session.user) {
            let err = new GeneralError('E_USER_NOTAUTHORIZED');
            cb(err, 'failed')
            return;
        }

        let client = req.devclient;
        var filename = file.originalname;
        let ext = filename.split('.').pop();

        if (filename == ext)
            ext = 'js';

        if (client.clientversion) {
            client.clientversion = client.clientversion + 1;
        } else {
            client.clientversion = 1;
        }
        // filename = genShortId(4) + '.' + ext;
        client.build_client = client.clientversion + '.' + ext;

        let key = client.gameid + '/client/' + client.id + '/' + client.build_client;

        cb(null, key)
    }

    cbClientImageKey(req, file, cb) {
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
        let clientid = req.body.clientid;
        let user = req.session.user;

        let key = gameid + '/client/' + clientid + '/' + filename;

        cb(null, key)
    }

    async apiDevUpdateClientImages(req, res, next) {
        try {
            let uploadMiddleware = upload.middleware('fivesecondgames', ['image/jpeg', 'image/png'], this.cbImageMeta, this.cbClientImageKey);
            let imageMiddleware = uploadMiddleware.array('images', 1);

            let clientid = req.params.clientid;
            let user = req.session.user;

            let clients = await devgame.findClient({ id: clientid }, user);
            if (!clients || clients.length == 0)
                return;

            let client = clients[0];
            let deleted = await upload.deleteClientPreviews(client);

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }

                let clientid = req.body.clientid;
                let user = req.session.user;
                let files = req.files;
                files = files.map(v => v.key.replace(client.gameid + '/client/' + client.id + '/', ''));

                client.preview_images = files.join(',');
                let response = await devgame.updateClientPreviewImages(client, user, files);
                console.log(response);

                res.json(client);
                return
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }

    }
    async apiDevUpdateGameImages(req, res, next) {
        // let game = req.body;

        try {
            let uploadMiddleware = upload.middleware('fivesecondgames', ['image/jpeg', 'image/png'], this.cbImageMeta, this.cbImageKey);
            let imageMiddleware = uploadMiddleware.array('images', 1);

            let gameid = req.params.gameid;
            let user = req.session.user;

            let game = await devgame.findGame({ gameid });

            let deleted = await upload.deletePreviews(game);

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
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


    async apiDevCreateClient(req, res, next) {
        let client = req.body;

        client.gameid = req.params.gameid;
        try {
            if (!client) {
                throw new GeneralError("E_MISSING_DEVCLIENT");
            }
            let sessionUser = req.session.user;

            let pushedClient = await devgame.createClient(client, sessionUser);
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

    async apiDevCreateServer(req, res, next) {
        let server = req.body;

        server.gameid = req.params.gameid;
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

    async apiDevCreateGame(req, res, next) {
        let game = req.body;

        try {
            if (!game) {
                throw new GeneralError("E_MISSING_DEVGAME");
            }
            let sessionUser = req.session.user;

            let pushedGame = await devgame.createGame(game, sessionUser);
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