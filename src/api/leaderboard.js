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

        this.router.get(
            "/api/v1/game/rankings/:game_slug/:countrycode",
            middleware,
            this.apiFindGameRankNational.bind(this)
        );
        this.router.get(
            "/api/v1/game/rankings/:game_slug",
            middleware,
            this.apiFindGameRankGlobal.bind(this)
        );
        this.router.get(
            "/api/v1/game/rankings/division/:game_slug/:division",
            middleware,
            this.apiFindGameRankDivision.bind(this)
        );
        this.router.get(
            "/api/v1/game/lbhs/:game_slug",
            middleware,
            this.apiFindGameLeaderboardHighscore.bind(this)
        );

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

    async apiFindGameRankNational(req, res, next) {
        let g = null;
        try {
            let user = req.user;
            let game_slug = req.params.game_slug;
            let countrycode = req.params.countrycode;
            g = await leaderboard.findGameRankNational(
                game_slug,
                user?.shortid,
                user?.displayname,
                countrycode
            );

            // redisRankings = await leaderboard.getRatingLeaderboardRedis({ game_slug, countrycode, season: 0 });
            // console.log(redisRankings);
        } catch (e) {
            next(e);
            return;
        }

        res.json(g);
        return;
    }
    async apiFindGameRankDivision(req, res, next) {
        let g = null;
        try {
            let user = req.user;
            let game_slug = req.params.game_slug;
            let division_id = req.params.division;
            g = await leaderboard.findGameRankDivision(game_slug, division_id);
        } catch (e) {
            next(e);
            return;
        }

        res.json(g);
        return;
    }
    async apiFindGameRankGlobal(req, res, next) {
        let g = null;
        try {
            let user = req.user;
            let game_slug = req.params.game_slug;
            g = await leaderboard.findGameRankGlobal(
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
