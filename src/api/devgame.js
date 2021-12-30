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

const gh = require('fsg-shared/services/github');

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
        return this.bundleRouter;
    }

    routes(middleware) {
        middleware = middleware || ((req, res, next) => { next() })


        this.router.post('/api/v1/dev/invite/github', middleware, this.apiInviteGithub.bind(this));

        this.router.get('/api/v1/dev/games/:userid', middleware, this.apiDevGames.bind(this));

        this.router.get('/api/v1/dev/find/game/:gameid', middleware, this.apiDevFindGame.bind(this));
        this.router.post('/api/v1/dev/create/game', middleware, this.apiDevCreateGame.bind(this));
        this.router.post('/api/v1/dev/deploy/game', middleware, this.apiDevDeployGame.bind(this));

        this.router.post('/api/v1/dev/update/game', middleware, this.apiDevUpdateGame.bind(this));
        this.router.post('/api/v1/dev/update/game/images/:game_slug', middleware, this.apiDevUpdateGameImages.bind(this));
        return this.router;
    }

    async apiInviteGithub(req, res, next) {
        try {
            let user = req.user;

            let success = await devgame.inviteToGithub(user);
            if (success) {
                res.json({ 'status': 'success' });
            }
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_INVITE_GITHUB_FAILED"));
        }
    }

    async apiDevUpdateGameBundle(req, res, next) {
        try {
            let gameMiddleware = upload.middlewareGame('acospub', 'acospriv', this.cbImageMeta)

            let apikey = req.header('X-GAME-API-KEY');
            if (!apikey) {
                res.json({ ecode: 'E_UPLOADFAILED' });
                return;
            }

            let scaled = req.header('X-GAME-SCALED');
            if (!scaled || scaled == 'no') {
                scaled = false;
            } else {
                scaled = true;
            }

            let hasDB = req.header('X-GAME-HASDB');
            if (!hasDB || hasDB == 'no') {
                hasDB = false;
            } else {
                hasDB = true;
            }

            // let apikey = '6394232D38D14DB2AC5B09E329CFD00E';

            var $this = this;

            let gameFull = await devgame.findGame({ apikey });
            let gameTest = {
                game_slug: gameFull.game_slug,
                version: gameFull.latest_version + 1,
                scaled,
                db: hasDB,
                status: 2
            }

            req.game = gameTest;

            gameMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }

                try {
                    let gameTest = await $this.createOrUpdateGameVersion(apikey, hasDB, scaled);
                    res.json(gameTest);
                }
                catch (e) {
                    next(new GeneralError("E_UPLOAD_FAILED"));
                }
            })
        }
        catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }
    }


    async createOrUpdateGameVersion(apikey, hasDB, scaled) {
        let game = { apikey };

        let gameFull = await devgame.findGame(game);


        let gameTest = await devgame.createGameVersion(gameFull, hasDB, scaled);

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
        let game = { gameid: req.params.gameid };

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

        let game_slug = req.body.game_slug;
        let user = req.user;

        let key = game_slug + '/preview/' + filename;

        cb(null, key)
    }



    async apiDevUpdateGameImages(req, res, next) {
        // let game = req.body;

        try {
            let uploadMiddleware = upload.middleware('acospub', ['image/jpeg', 'image/png'], this.cbImageMeta, this.cbImageKey);
            let imageMiddleware = uploadMiddleware.array('images', 1);

            let game_slug = req.params.game_slug;
            let user = req.user;

            let game = await devgame.findGame({ game_slug }, user);

            let deleted = await upload.deletePreviews(game);

            imageMiddleware(req, res, async function (err) {
                if (err) {
                    console.error(err);
                    // An unknown error occurred when uploading.
                    next(new GeneralError("E_UPLOAD_FAILED"));
                    return;
                }

                let game_slug = req.body.game_slug;
                let user = req.user;
                let files = req.files;
                files = files.map(v => v.key.replace(game_slug + '/preview/', ''));

                let response = await devgame.updatePreviewImages(game_slug, user, files);
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

    async apiDevDeployGame(req, res, next) {
        let game = req.body;

        try {
            if (!game) {
                throw new GeneralError("E_MISSING_DEVGAME");
            }
            let pushedGame = await devgame.deployGame(game, req.user);
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