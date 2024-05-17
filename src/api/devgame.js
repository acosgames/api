const credutil = require("shared/util/credentials");
const { Router } = require("express");

const MySQL = require("shared/services/mysql.js");
const mysql = new MySQL();

// const UploadFileService = require('shared/services/uploadfile');
// const upload = new UploadFileService();

const DevGameService = require("shared/services/devgame");
const devgame = new DevGameService();

const { genShortId } = require("shared/util/idgen");

const { GeneralError } = require("shared/util/errorhandler");

const gh = require("shared/services/github");

const DevAuth = require("./authentication/authdev");
const devauth = new DevAuth();

// const multer = require('multer')
const {
    S3UploadGameBundles,
    S3UploadGameImage,
    deletePreviews,
} = require("./ACOSStorage");

// const ACOSStorage = require('./ACOSStorage');
// const ACOSUpload = multer({ storage: ACOSStorage({}) })
// const ACOSMiddleware = ACOSUpload.any();//.fields([{ name: 'client', maxCount: 1 }, { name: 'server', maxCount: 1 }, { name: 'db', maxCount: 1 }])

module.exports = class DevGameAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
        this.bundleRouter = new Router();
    }

    bundleRoutes() {
        this.bundleRouter.post(
            "/api/v1/dev/update/game/bundle/",
            devauth.auth,
            this.apiDevUpdateGameBundle.bind(this)
        );
        return this.bundleRouter;
    }

    routes(middleware) {
        middleware =
            middleware ||
            ((req, res, next) => {
                next();
            });

        this.router.post(
            "/api/v1/dev/invite/github",
            middleware,
            this.apiInviteGithub.bind(this)
        );

        this.router.get(
            "/api/v1/dev/gametemplates",
            middleware,
            this.apiDevGameTemplates.bind(this)
        );
        this.router.get(
            "/api/v1/dev/games/:userid",
            middleware,
            this.apiDevGames.bind(this)
        );

        this.router.get(
            "/api/v1/dev/find/game/:game_slug",
            middleware,
            this.apiDevFindGame.bind(this)
        );
        this.router.post(
            "/api/v1/dev/create/game",
            middleware,
            this.apiDevCreateGame.bind(this)
        );
        this.router.post(
            "/api/v1/dev/deploy/game",
            middleware,
            this.apiDevDeployGame.bind(this)
        );

        this.router.post(
            "/api/v1/dev/update/game",
            middleware,
            this.apiDevUpdateGame.bind(this)
        );
        this.router.post(
            "/api/v1/dev/update/gameapikey",
            middleware,
            this.apiDevUpdateGameAPIKey.bind(this)
        );
        this.router.post(
            "/api/v1/dev/delete/game",
            middleware,
            this.apiDevDeleteGame.bind(this)
        );
        this.router.post(
            "/api/v1/dev/update/game/images/:game_slug",
            middleware,
            this.apiDevUpdateGameImages.bind(this)
        );
        return this.router;
    }

    async apiInviteGithub(req, res, next) {
        try {
            let user = req.user;

            let db = await mysql.db();
            let dbUser = await db.sql(
                `SELECT * FROM person WHERE shortid = ?`,
                [user.shortid]
            );
            dbUser =
                dbUser?.results && dbUser?.results.length > 0
                    ? dbUser.results[0]
                    : null;
            console.log("DBUSER: ", dbUser);
            if (!dbUser) {
                console.log("USER NOT FOUND");
                throw new Error("User not found");
            }
            console.log("USER FOUND INVITING TO GITHUB");
            let success = await devgame.inviteToGithub(dbUser);
            console.log("INVITED?: ", success);
            if (success) {
                res.json({ status: "success" });
                return;
            }
        } catch (e) {
            console.error(e);
        }
        next(new GeneralError("E_INVITE_GITHUB_FAILED"));
    }

    async apiDevDeleteGame(req, res, next) {
        let game = req.body;

        if (typeof game.version == "string")
            game.version = parseInt(game.version);

        try {
            if (!game) {
                throw new GeneralError("E_DEVGAME_MISSING");
            }
            let sessionUser = req.user;

            let results = await devgame.deleteGame(game, sessionUser);
            if (!results) {
                throw new GeneralError("E_DEVGAME_DELETEFAILED");
            }

            if (results.ecode) res.status(400);
            res.json(results);
        } catch (e) {
            next(e);
        }
    }

    async apiDevUpdateGameBundle(req, res, next) {
        try {
            let apikey = req.header("X-GAME-API-KEY");
            if (!apikey || !req.game) {
                res.json({ ecode: "E_NOTAUTHORIZED" });
                return;
            }

            try {
                let apikeyParts = apikey.split(".");
                if (apikeyParts.length == 2) {
                    let game_slug = apikeyParts[0];
                    if (req.game.game_slug != game_slug) {
                        res.json({
                            error: `[ERROR] game_slug provided (${game_slug}) does not match game from apikey (${req.game.game_slug}). Did you copy the correct API Key?`,
                            ecode: "E_GAMESLUG_MISMATCH",
                        });
                        return;
                    }
                }
            } catch (e2) {
                console.error(e2);
            }

            let filesizes = req.header("X-GAME-FILESIZES");
            if (filesizes) {
                let parts = filesizes.split(";");
                let sizes = {};
                for (const part of parts) {
                    if (part.length == 0) {
                        continue;
                    }

                    let keyval = part.split("=");
                    sizes[keyval[0]] = keyval[1];
                }
                req.filesizes = sizes;
            }

            let gameSettings = req.header("X-GAME-SETTINGS") || "{}";
            try {
                gameSettings = JSON.parse(gameSettings);
            } catch (e) {
                console.error(e);
            }

            let hasDB = req.header("X-GAME-HASDB");
            if (!hasDB || hasDB == "no") {
                hasDB = false;
            } else {
                hasDB = true;
            }

            let hasCSS = req.header("X-GAME-HASCSS");
            if (!hasDB || hasDB == "no") {
                hasDB = false;
            } else {
                hasDB = true;
            }

            let screentype = Number(gameSettings.screentype);
            let resow = Number(gameSettings.resow);
            let resoh = Number(gameSettings.resoh);
            let screenwidth = Number(gameSettings.screenwidth);

            let gameFull = req.game;
            let gameTest = {
                game_slug: gameFull.game_slug,
                version: gameFull.latest_version + 1,
                screentype,
                resow,
                resoh,
                screenwidth,
                db: hasDB,
                css: hasCSS,
                status: 2,
            };

            req.game = gameTest;

            try {
                let s3responses = await S3UploadGameBundles(
                    req,
                    res,
                    function (err, data) {
                        if (err) {
                            res.write(JSON.stringify({ error: err }) + "\n");
                            return;
                        }
                        if (data.key && !data.loaded && !data.exists)
                            console.log("S3 Upload Completed: ", data.key);
                        if (data.Key) delete data.Key;
                        data.key = data.key.split("/").pop();
                        res.write(JSON.stringify(data) + "\n");
                    }
                );
            } catch (e2) {
                res.write(JSON.stringify({ error: e2 }) + "\n");
                res.end();
                return;
            }

            // console.log("req.body", req.body);
            // console.log("req.file", req.file);

            console.log(
                "Upload is completed for ",
                req.game.game_slug,
                "at version",
                req.game.latest_version
            );

            gameTest = await this.createOrUpdateGameVersion(
                apikey,
                hasDB,
                hasCSS,
                screentype,
                resow,
                resoh,
                screenwidth
            );

            this.validateSettings(gameSettings);

            let gameWithSetings = { apikey };
            if ("minplayers" in gameSettings)
                gameWithSetings.minplayers = gameSettings.minplayers;
            if ("maxplayers" in gameSettings)
                gameWithSetings.maxplayers = gameSettings.maxplayers;
            if ("minteams" in gameSettings)
                gameWithSetings.minteams = gameSettings.minteams;
            if ("maxteams" in gameSettings)
                gameWithSetings.maxteams = gameSettings.maxteams;
            if ("teams" in gameSettings) {
                gameWithSetings.teams = gameSettings.teams;
            }

            let gameResult = await devgame.updateGame(gameWithSetings);
            let merged = Object.assign({}, gameTest, gameResult);
            // res.json(merged);

            merged.game_slug = req.game.game_slug;

            let json = req.game;
            let jsonStr = JSON.stringify(merged);
            res.write(jsonStr);
            res.end();

            // let zipped
            //     = zlib.createGzip();
            // // var cnt = 0;

            // console.log("Transformed: ", file.fieldname);
            // file.stream.on('data', (chunk) => {
            //     // console.log("chunk[" + cnt + "]", chunk);
            //     // cnt++;
            //     //prepend the iframe top html
            //     // if (cnt == 1)
            //     //     zipped.write(iframeTop);
            //     //write the JS into the middle
            //     zipped.write(chunk);
            // });

            // file.stream.on('end', () => {
            //     //append the iframe bottom html
            //     // zipped.write(iframeBottom);
            //     // var zipped = new stream.PassThrough();
            //     // cb(null, zipped);
            // });

            return;

            // let screentype = req.header('X-GAME-SCREENTYPE') || 1;
            // let resow = req.header('X-GAME-RESOW') || 4;
            // let resoh = req.header('X-GAME-RESOH') || 4;
            // let screenwidth = req.header('X-GAME-SCREENWIDTH') || 1200;

            // let screentype = Number(gameSettings.screentype);
            // let resow = Number(gameSettings.resow);
            // let resoh = Number(gameSettings.resoh);
            // let screenwidth = Number(gameSettings.screenwidth);

            // let hasDB = req.header('X-GAME-HASDB');
            // if (!hasDB || hasDB == 'no') {
            //     hasDB = false;
            // } else {
            //     hasDB = true;
            // }

            // // let apikey = '6394232D38D14DB2AC5B09E329CFD00E';

            // var $this = this;

            // let gameFull = await devgame.findGame({ apikey });
            // let gameTest = {
            //     game_slug: gameFull.game_slug,
            //     version: gameFull.latest_version + 1,
            //     screentype,
            //     resow,
            //     resoh,
            //     screenwidth,
            //     db: hasDB,
            //     status: 2
            // }

            // req.game = gameTest;

            // gameMiddleware(req, res, async function (err) {
            //     if (err) {
            //         console.error(err);
            //         // An unknown error occurred when uploading.
            //         next(new GeneralError("E_UPLOAD_FAILED"));
            //         return;
            //     }

            //     try {
            //         let gameTest = await $this.createOrUpdateGameVersion(apikey, hasDB, screentype, resow, resoh, screenwidth);

            //         $this.validateSettings(gameSettings)

            //         let gameWithSetings = { apikey };
            //         if ('minplayers' in gameSettings)
            //             gameWithSetings.minplayers = gameSettings.minplayers
            //         if ('maxplayers' in gameSettings)
            //             gameWithSetings.maxplayers = gameSettings.maxplayers
            //         if ('minteams' in gameSettings)
            //             gameWithSetings.minteams = gameSettings.minteams
            //         if ('maxteams' in gameSettings)
            //             gameWithSetings.maxteams = gameSettings.maxteams
            //         if ('teams' in gameSettings) {
            //             gameWithSetings.teams = gameSettings.teams;
            //         }

            //         let gameResult = await devgame.updateGame(gameWithSetings);
            //         let merged = Object.assign({}, gameTest, gameResult);
            //         res.json(merged);
            //     }
            //     catch (e) {
            //         next(new GeneralError("E_UPLOAD_FAILED"));
            //     }
            // })
        } catch (e) {
            console.error(e);
            next(new GeneralError("E_UPLOAD_FAILED"));
        }
    }

    validateSettings(s) {
        let dirty = false;

        if (!("minplayers" in s) || !Number.isInteger(s.minplayers)) {
            s.minplayers = 1;
            dirty = true;
        }
        // else if (s.minplayers > s.maxplayers) {
        //     s.minplayers = s.maxplayers;
        //     dirty = true;
        // }
        else if (s.minplayers < 0) {
            s.minplayers = 0;
            dirty = true;
        }
        if (!("maxplayers" in s) || !Number.isInteger(s.maxplayers)) {
            s.maxplayers = 1;
            dirty = true;
        } else if (s.maxplayers < s.minplayers) {
            s.maxplayers = s.minplayers;
            dirty = true;
        } else if (s.maxplayers < 0) {
            s.maxplayers = 0;
            dirty = true;
        }

        if (!("minteams" in s) || !Number.isInteger(s.minteams)) {
            s.minteams = 0;
            dirty = true;
        }
        // else if (s.minteams > s.maxteams) {
        //     s.minteams = s.maxteams;
        //     dirty = true;
        // }
        else if (s.minteams < 0) {
            s.minteams = 0;
            dirty = true;
        }

        if (!("maxteams" in s) || !Number.isInteger(s.maxteams)) {
            s.maxteams = 0;
            dirty = true;
        } else if (s.maxteams < s.minteams) {
            s.maxteams = s.minteams;
            dirty = true;
        } else if (s.maxteams < 0) {
            s.maxteams = 0;
            dirty = true;
        }

        if (!("teams" in s) || !Array.isArray(s.teams)) {
            s.teams = [];
            dirty = true;
        } else if (s.maxteams > 0 && s.teams.length < s.maxteams) {
            let missingCount = s.maxteams - s.teams.length;
            for (let i = 0; i < missingCount; i++) {
                s.teams.push({
                    team_name: "Team " + (s.teams.length + i + 1),
                    team_slug: "team_" + (s.teams.length + i + 1),
                    minplayers: 1,
                    maxplayers: 1,
                    team_order: s.teams.length,
                    color: "#000000",
                });
                dirty = true;
            }
        } else if (s.teams.length > s.maxteams) {
            let overCount = s.teams.length - s.maxteams;
            for (let i = 0; i < overCount; i++) {
                s.teams.pop();
                dirty = true;
            }
        }

        if ("teams" in s) {
            if (s.teams.length > 0) {
                for (let team of s.teams) {
                    if (
                        !("minplayers" in team) ||
                        !Number.isInteger(team.minplayers)
                    ) {
                        team.minplayers = 1;
                        dirty = true;
                    } else if (team.minplayers < 0) {
                        team.minplayers = 0;
                        dirty = true;
                    }
                    if (
                        !("maxplayers" in team) ||
                        !Number.isInteger(team.maxplayers)
                    ) {
                        team.maxplayers = 1;
                        dirty = true;
                    } else if (team.maxplayers < team.minplayers) {
                        team.maxplayers = team.minplayers;
                        dirty = true;
                    } else if (team.maxplayers < 0) {
                        team.maxplayers = 0;
                        dirty = true;
                    }
                }
            }
        }

        if (!("screentype" in s) || !Number.isInteger(s.screentype)) {
            s.screentype = 3;
            dirty = true;
        }
        if (!("resow" in s) || !Number.isInteger(s.resow)) {
            s.resow = 4;
            dirty = true;
        }
        if (!("resoh" in s) || !Number.isInteger(s.resoh)) {
            s.resoh = 3;
            dirty = true;
        }
        if (!("screenwidth" in s) || !Number.isInteger(s.screenwidth)) {
            s.screenwidth = 800;
            dirty = true;
        }

        if (dirty) {
            // this.updateGameSettings(s);
            return false;
        }

        return true;
    }

    async createOrUpdateGameVersion(
        apikey,
        hasDB,
        hasCSS,
        screentype,
        resow,
        resoh,
        screenwidth
    ) {
        let game = { apikey };

        let gameFull = await devgame.findGame(game);

        let gameTest = await devgame.createGameVersion(
            gameFull,
            hasDB,
            hasCSS,
            screentype,
            resow,
            resoh,
            screenwidth
        );

        return gameTest;
    }

    async apiDevGameTemplates(req, res, next) {
        try {
            // let sessionUser = req.session.user;

            let gameTemplates = await devgame.findGameTemplates();
            if (!gameTemplates) {
                throw new GeneralError("E_GAMETEMPLATES_NOTFOUND");
            }

            res.json(gameTemplates);
        } catch (e) {
            next(e);
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
        } catch (e) {
            next(e);
        }
    }

    async apiDevFindGame(req, res, next) {
        let game = { game_slug: req.params.game_slug };

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
        } catch (e) {
            next(e);
        }
    }

    async apiDevUpdateGameAPIKey(req, res, next) {
        let game = req.body;

        try {
            if (!game) {
                throw new GeneralError("E_DEVGAME_MISSING");
            }
            let sessionUser = req.user;

            let pushedGame = await devgame.updateGameAPIKey(game, sessionUser);
            if (!pushedGame) {
                throw new GeneralError("E_DEV_APIKEYFAILED");
            }

            if (pushedGame.ecode) res.status(400);
            res.json(pushedGame);
        } catch (e) {
            next(e);
        }
    }

    async apiDevUpdateGame(req, res, next) {
        let game = req.body;

        if (typeof game.version == "string")
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

            if (pushedGame.ecode) res.status(400);
            res.json(pushedGame);
        } catch (e) {
            next(e);
        }
    }

    cbImageMeta(req, file, cb) {
        cb(null, null);
    }

    cbImageKeyOverride = (hash) => (req, file, cb) => {
        if (!req.user) {
            let err = new GeneralError("E_NOTAUTHORIZED");
            cb(err, "failed");
            return;
        }

        var filename = file.originalname;
        let ext = filename.split(".").pop();

        if (filename == ext) ext = "jpg";

        filename = genShortId(4) + "." + ext;
        filename = hash + "." + ext;

        let game_slug = req.body.game_slug;
        let user = req.user;

        let key = "g/" + game_slug + "/preview/" + filename;

        cb(null, key);
    };

    async apiDevUpdateGameImages(req, res, next) {
        // let game = req.body;

        try {
            let game_slug = req.params.game_slug;
            let user = req.user;

            let db = await mysql.db();
            //   let dbUser = await db.sql(`SELECT * FROM person WHERE shortid = ?`, [
            //     user.shortid,
            //   ]);
            //   user =
            //     dbUser?.results && dbUser?.results.length > 0
            //       ? dbUser.results[0]
            //       : null;
            // console.log("DBUSER: ", dbUser)
            //   if (!user) {
            //     // console.log("USER NOT FOUND");
            //     throw new Error("User not found");
            //   }
            let hash = genShortId(6);

            let game = await devgame.findGame({ game_slug }, user);
            if (!game) {
                throw new GeneralError("E_NOTAUTHORIZED");
            }

            if (game.status == 5) {
                throw new GeneralError("E_SUSPENDED");
            }

            req.game = game;
            let deleted = await deletePreviews(game);
            // let uploadMiddleware = upload.middleware('acospub', ['image/jpeg', 'image/png'], this.cbImageMeta, this.cbImageKeyOverride(hash));
            // let imageMiddleware = uploadMiddleware.array('images', 1);
            let s3responses = await S3UploadGameImage(
                req,
                res,
                async function (err, data) {
                    if (err) {
                        res.write(JSON.stringify({ error: err }) + "\n");
                        return;
                    }
                    if (data.key && !data.loaded && !data.exists)
                        console.log("S3 Upload Completed: ", data.key);
                    if (data.Key) delete data.Key;
                    data.key = data.key.split("/").pop();
                    // res.write(JSON.stringify(data) + '\n');
                }
            );

            let files = req.files;
            files = files.map((v) =>
                v.replace("g/" + game_slug + "/preview/", "")
            );

            let response = await devgame.updatePreviewImages(
                game.gameid,
                game_slug,
                user,
                files
            );
            console.log(response.data);

            res.json({ images: files });

            // imageMiddleware(req, res, async function (err) {
            //     if (err) {
            //         console.error(err);
            //         // An unknown error occurred when uploading.
            //         next(new GeneralError("E_UPLOAD_FAILED"));
            //         return;
            //     }

            //     let game_slug = req.body.game_slug;
            //     let user = req.user;
            //     let files = req.files;
            //     files = files.map(v => v.key.replace('g/' + game_slug + '/preview/', ''));

            //     let response = await devgame.updatePreviewImages(game.gameid, game_slug, user, files);
            //     console.log(response.data);

            //     res.json({ images: files });
            //     return
            // })
        } catch (e) {
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

            if (pushedGame.ecode) res.status(400);
            res.json(pushedGame);
        } catch (e) {
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

            if (pushedGame.ecode) res.status(400);
            res.json(pushedGame);
        } catch (e) {
            next(e);
        }
    }
};
