const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('fsg-shared/services/mysql.js');
const mysql = new MySQL();

const UploadFileService = require('fsg-shared/services/uploadfile');
const upload = new UploadFileService();

const DevGameService = require('fsg-shared/services/devgame');
const devgame = new DevGameService();

const { genShortId } = require('fsg-shared/util/idgen');

const { GeneralError } = require('fsg-shared/util/errorhandler');

const DevAuth = require('./authentication/authdev');
const devauth = new DevAuth();

module.exports = class DevGameAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
        this.bundleRouter = new Router();
    }

    bundleRoutes() {
        this.bundleRouter.post('/api/v1/dev/update/game/bundle/', devauth.auth, this.apiDevUpdateGameBundle.bind(this));
        this.bundleRouter.post('/api/v1/dev/update/client/bundle/', devauth.auth, this.apiDevUpdateClientBundle.bind(this));
        this.bundleRouter.post('/api/v1/dev/update/server/bundle/', devauth.auth, this.apiDevUpdateServerBundle.bind(this));
        this.bundleRouter.post('/api/v1/dev/update/server/db/', devauth.auth, this.apiDevUpdateServerDatabase.bind(this));
        return this.bundleRouter;
    }

    routes(middleware) {
        middleware = middleware || ((req, res, next) => { next() })

        // this.router.post('/api/v1/dev/create/server/:gameid', middleware, this.apiDevCreateServer.bind(this));
        // this.router.post('/api/v1/dev/find/server/:gameid', middleware, this.apiDevFindServer.bind(this));

        this.router.get('/api/v1/dev/games/:userid', middleware, this.apiDevGames.bind(this));

        // this.router.post('/api/v1/dev/create/client/:gameid', middleware, this.apiDevCreateClient.bind(this));
        // this.router.post('/api/v1/dev/find/client/:gameid', middleware, this.apiDevFindClient.bind(this));
        // this.router.post('/api/v1/dev/update/client/images/:clientid', middleware, this.apiDevUpdateClientImages.bind(this));

        this.router.get('/api/v1/dev/find/game/:gameid', middleware, this.apiDevFindGame.bind(this));
        this.router.post('/api/v1/dev/create/game', middleware, this.apiDevCreateGame.bind(this));
        this.router.post('/api/v1/dev/update/game', middleware, this.apiDevUpdateGame.bind(this));
        this.router.post('/api/v1/dev/update/game/images/:gameid', middleware, this.apiDevUpdateGameImages.bind(this));
        return this.router;
    }

    async apiDevUpdateGameBundle(req, res, next) {
        try {
            let { clientMiddleware, serverMiddleware, dbMiddleware } = upload.middlewareGame('fivesecondgames', 'fsg-server', this.cbImageMeta)

            // let uploadMiddleware = upload.middlewareTransform('fivesecondgames', ['text/javascript', 'application/javascript'], this.cbImageMeta, this.cbClientBundleKey, (req, file, cb) => {
            //     cb(null, 'text/html', file.stream);
            // });
            // let imageMiddleware = uploadMiddleware.array('bundle', 1);

            let apikey = req.header('X-GAME-API-KEY');
            if (!apikey) {
                res.json({ ecode: 'E_UPLOADFAILED' });
                return;
            }
            // let apikey = '6394232D38D14DB2AC5B09E329CFD00E';

            var $this = this;

            let gameFull = await devgame.findGame({ apikey });
            let gameTest = {
                gameid: gameFull.gameid,
                version: gameFull.version + 1,
                status: 2
            }

            req.game = gameTest;

            clientMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }

                serverMiddleware(req, res, async function (err) {
                    if (err) {
                        console.error(err);
                        // An unknown error occurred when uploading.
                        next(new GeneralError("E_UPLOAD_FAILED"));
                        return;
                    }

                    dbMiddleware(req, res, async function (err) {
                        if (err) {
                            console.error(err);
                            // An unknown error occurred when uploading.
                            next(new GeneralError("E_UPLOAD_FAILED"));
                            return;
                        }

                        let gameTest = await $this.createOrUpdateGameVersion(apikey);
                        res.json(gameTest);
                        return
                    })

                    return
                })
                return
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }
    }

    async apiDevUpdateServerDatabase(req, res, next) {
        try {
            let uploadMiddleware = upload.middlewarePrivateDB('fsg-server', ['text/javascript', 'application/json'], this.cbImageMeta, this.cbServerDBKey);
            let imageMiddleware = uploadMiddleware.array('db', 1);

            let apikey = req.header('X-GAME-API-KEY');
            if (!apikey) {
                res.json({ ecode: 'E_UPLOADFAILED' });
                return;
            }
            // let apikey = '6394232D38D14DB2AC5B09E329CFD00E';
            let gameTest = await this.createOrUpdateGameVersion(apikey, true);

            req.game = gameTest;

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }
                res.json(gameTest);
                return
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }
    }

    async apiDevUpdateServerBundle(req, res, next) {
        try {
            let uploadMiddleware = upload.middlewarePrivate('fsg-server', ['text/javascript', 'application/javascript'], this.cbImageMeta, this.cbServerBundleKey);
            let imageMiddleware = uploadMiddleware.array('bundle', 1);

            let apikey = req.header('X-GAME-API-KEY');
            if (!apikey) {
                res.json({ ecode: 'E_UPLOADFAILED' });
                return;
            }

            // let apikey = '6394232D38D14DB2AC5B09E329CFD00E';
            let gameTest = await this.createOrUpdateGameVersion(apikey);
            req.game = gameTest;

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }
                res.json(gameTest);
                return
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }
    }

    async apiDevUpdateClientBundle(req, res, next) {
        try {
            let uploadMiddleware = upload.middlewareTransform('fivesecondgames', ['text/javascript', 'application/javascript'], this.cbImageMeta, this.cbClientBundleKey, (req, file, cb) => {
                cb(null, 'text/html', file.stream);
            });
            let imageMiddleware = uploadMiddleware.array('bundle', 1);

            let apikey = req.header('X-GAME-API-KEY');
            if (!apikey) {
                res.json({ ecode: 'E_UPLOADFAILED' });
                return;
            }
            // let apikey = '6394232D38D14DB2AC5B09E329CFD00E';

            let gameTest = await this.createOrUpdateGameVersion(apikey);

            req.game = gameTest;

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }

                res.json(gameTest);
                return
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }
    }

    async createOrUpdateGameVersion(apikey, hasDB) {
        let game = { apikey };
        let versions = await devgame.findGameVersions(game);
        let gameTest = null;

        //check if we have a test version (will be higher version than published)
        for (var i = 0; i < versions.length; i++) {
            let gameVersion = versions[i];
            if (gameVersion.published_version < gameVersion.version) {
                gameTest = gameVersion;
                break;
            }
        }

        //no test version exists, create one
        if (!gameTest) {
            let gameFull = await devgame.findGame(game);
            gameTest = {
                gameid: gameFull.gameid,
                version: gameFull.version + 1,
                status: 2
            }

            gameTest = await devgame.createGameVersion(gameTest);
            console.log("Created DevGame: ", gameTest);
        }
        else {
            gameTest = await devgame.updateGameVersion(gameTest);
            console.log("Updated DevGame: ", gameTest);
        }

        if (hasDB) {
            gameTest = await devgame.addDBtoGameVersion(gameTest);
            console.log(gameTest);
        }

        return gameTest;
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
            let sessionUser = req.user;

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

    async apiDevFindClient(req, res, next) {
        let client = { id: req.params.gameid };

        try {
            if (!client) {
                throw new GeneralError("E_CLIENT_MISSING");
            }
            let sessionUser = req.user;

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
            let sessionUser = req.user;

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
            let sessionUser = req.user;

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
            let sessionUser = req.user;

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
            let sessionUser = req.user;

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
        if (!req.user) {
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
        let user = req.user;

        let key = gameid + '/preview/' + filename;

        cb(null, key)
    }

    cbServerDBKey(req, file, cb) {
        let game = req.game;
        var filename = file.originalname;
        filename = "server.db." + game.version + '.json';
        let key = game.gameid + '/' + filename;

        cb(null, key)
    }

    cbServerBundleKey(req, file, cb) {
        let game = req.game;
        var filename = file.originalname;
        filename = filename.replace('.js', '.' + game.version + '.js')
        let key = game.gameid + '/' + filename;

        cb(null, key)
    }

    cbClientBundleKey(req, file, cb) {

        let game = req.game;
        var filename = file.originalname;
        filename = filename.replace('.js', '.' + game.version + '.js')
        let key = game.gameid + '/client/' + filename;

        cb(null, key)
    }

    cbClientImageKey(req, file, cb) {
        if (!req.user) {
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
            let user = req.user;

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
                let user = req.user;
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
                let user = req.user;
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
            let sessionUser = req.user;

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
            let sessionUser = req.user;

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
            let pushedGame = await devgame.createGame(game, req.user);
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