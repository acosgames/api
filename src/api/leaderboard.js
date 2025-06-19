const credutil = require("shared/util/credentials");
const { Router } = require("express");

const MySQL = require("shared/services/mysql.js");
const mysql = new MySQL();

const { GeneralError } = require("shared/util/errorhandler");

const game = require("shared/services/game");
// const game = new GameService();

const leaderboard = require("shared/services/leaderboard");
// const leaderboard = new LeaderboardService();

const storage = require("./storage");

module.exports = class LeaderboardAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();
        this.router = new Router();
        this.actionRouter = new Router();
    }

    routes(middleware) {
        middleware =
            middleware ||
            ((req, res, next) => {
                next();
            });

        this.router.post(
            "/api/v1/game/leaderboard",
            middleware,
            this.apiFindLeaderboard.bind(this)
        );

        // this.router.get(
        //     "/api/v1/game/rankings/:game_slug/:countrycode",
        //     middleware,
        //     this.apiFindGameRankNational.bind(this)
        // );
        // this.router.get(
        //     "/api/v1/game/rankings/:game_slug",
        //     middleware,
        //     this.apiFindGameRankGlobal.bind(this)
        // );
        // this.router.get(
        //     "/api/v1/game/rankings/division/:game_slug/:division",
        //     middleware,
        //     this.apiFindGameRankDivision.bind(this)
        // );
        // this.router.get(
        //     "/api/v1/game/lbhs/:game_slug",
        //     middleware,
        //     this.apiFindGameLeaderboardHighscore.bind(this)
        // );

        return this.router;
    }

    actionRoutes(middleware) {
        middleware =
            middleware ||
            ((req, res, next) => {
                next();
            });

        return this.actionRouter;
    }
    async apiFindLeaderboard(req, res, next) {
        let response = null;
        try {
            let user = req.user;
            let displayname = user?.displayname || undefined;

            let config = {
                displayname,
            };

            config.limit = Number.parseInt(config.limit);
            if (!config.limit) {
                config.limit = 100;
            }
            config.limit = Math.min(100, Math.max(10, config.limit));

            config = Object.assign({}, req.body, config);

            response = await leaderboard.getLeaderboard(config);
            res.json(response);
        } catch (e) {
            console.error(e);
            next(e);
        }
    }

    async apiFindGameRankNational(req, res, next) {
        let response = null;
        try {
            let user = req.user;
            let displayname = user?.displayname || undefined;
            let game_slug = req.params.game_slug;
            let countrycode = req.params.countrycode;

            let config = {
                type: "rank",
                game_slug,
                countrycode,
                displayname,
            };

            response = await leaderboard.getLeaderboard(config);
            res.json(response);
        } catch (e) {
            next(e);
        }
    }
    async apiFindGameRankDivision(req, res, next) {
        try {
            let user = req.user;
            let displayname = user?.displayname || undefined;
            let game_slug = req.params.game_slug;
            let division_id = req.params.division;

            let config = {
                type: "division",
                game_slug,
                division_id,
                displayname,
            };

            let response = await leaderboard.getLeaderboard(config);

            res.json(response);
        } catch (e) {
            next(e);
        }
    }
    async apiFindGameRankGlobal(req, res, next) {
        let response = null;
        try {
            let user = req.user;
            let displayname = user?.displayname || undefined;
            let game_slug = req.params.game_slug;

            let config = {
                type: "rank",
                game_slug,
                displayname,
            };

            response = await leaderboard.getLeaderboard(config);
            res.json(response);
        } catch (e) {
            next(e);
        }
    }

    async apiFindGameLeaderboardHighscore(req, res, next) {
        let g = null;
        try {
            let user = req.user;
            let game_slug = req.params.game_slug;
            g = await leaderboard.findGameLeaderboardHighscore(
                game_slug,
                user?.shortid,
                user?.displayname
            );
        } catch (e) {
            next(e);
            return;
        }

        res.json(g);
        return;
    }
};
