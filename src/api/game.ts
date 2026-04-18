import credutil from 'shared/util/credentials.js';
import { Router } from "express";

import MySQL from 'shared/services/mysql.js';
const mysql = new MySQL();

import { GeneralError } from 'shared/util/errorhandler.js';

import game from 'shared/services/game.js';
// const game = new GameService();

import storage from "./storage.js";
import achievements from 'shared/services/achievements.js';

export default class GameAPI {
    credentials: any;
    router: any;
    actionRouter: any;
    constructor(credentials?:any) {
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
            "/api/v1/games",
            middleware,
            this.apiFindGames.bind(this)
        );
        this.router.get(
            "/api/v1/game/:game_slug",
            middleware,
            this.apiFindGame.bind(this)
        );

        this.router.get(
            "/api/v1/game/replays/:game_slug",
            middleware,
            this.apiFindGameReplays.bind(this)
        );

        return this.router;
    }

    actionRoutes(middleware) {
        middleware =
            middleware ||
            ((req, res, next) => {
                next();
            });
        this.actionRouter.get(
            "/api/v1/game/person/:game_slug",
            middleware,
            this.apiFindGamePerson.bind(this)
        );

        this.actionRouter.post(
            `/api/v1/game/achievement/claim`,
            middleware,
            this.apiClaimAchievement.bind(this)
        );

        this.actionRouter.post(
            "/api/v1/game/report",
            middleware,
            this.apiReportGame.bind(this)
        );
        this.actionRouter.post(
            "/api/v1/game/rate",
            middleware,
            this.apiRateGame.bind(this)
        );

        return this.actionRouter;
    }

    async apiFindGamePerson(req, res, next) {
        let g = null;
        try {
            let user = req.user;
            let game_slug = req.params.game_slug;
            g = await game.findGamePerson(
                game_slug,
                user.shortid,
                user.displayname
            );
        } catch (e) {
            next(e);
            return;
        }

        if (Array.isArray(g)) {
            g = g[0];
        }
        res.json(g);
        return;
    }

    async apiClaimAchievement(req, res, next) {
        try {
            let payload = req.body;
            let game_slug = payload.game_slug;
            let achievement_slug = payload.achievement_slug;

            let user = req.user;
            let shortid = user.shortid;

            let results = await achievements.claimAchievement(
                game_slug,
                shortid,
                achievement_slug
            );
            res.json(results);
        } catch (e) {
            next(e);
            return;
        }
    }
    async apiReportGame(req, res, next) {
        try {
            let payload = req.body;
            let game_slug = payload.game_slug;
            let reportType = payload.reportType;

            let user = req.user;
            let shortid = user.shortid;

            if (reportType < 0 || reportType > 3) {
                next(new GeneralError("E_INVALIDTYPE"));
                return;
            }

            let results = await game.reportGame(game_slug, shortid, reportType);
            res.json(results);
        } catch (e) {
            next(e);
            return;
        }
    }

    async apiRateGame(req, res, next) {
        let payload = req.body;
        let game_slug = payload.game_slug;
        let vote = payload.vote;
        let previousVote = payload.previousVote;

        let user = req.user;
        let shortid = user.shortid;

        if (typeof vote !== "boolean") {
            next(new GeneralError("E_INVALIDTYPE"));
            return;
        }

        try {
            let votes = await game.rateGame(
                game_slug,
                shortid,
                vote,
                previousVote
            );
            res.json({ votes });
        } catch (e) {
            next(e);
            return;
        }
    }

    async apiFindGames(req, res, next) {
        let games = null;
        try {
            games = storage.getGameList();
            if (!games) {
                games = await game.findGames();
                storage.setGameList(games);
            } else {
                let queueCounts = await game.getAllGamesQueueCount();
                for (var i = 0; i < games.length; i++) {
                    let g = games[i];
                    if (typeof queueCounts[g.game_slug] !== "undefined")
                        g.queueCount = queueCounts[g.game_slug];
                    else g.queueCount = 0;
                }
            }
        } catch (e) {
            next(e);
            return;
        }

        res.json(games);
        return;
    }

    async apiFindGameReplays(req, res, next) {
        let replays = null;
        try {
            let game_slug = req.params.game_slug;
            replays = await game.findGameReplays(game_slug);
        } catch (e) {
            next(e);
            return;
        }

        res.json(replays);
        return;
    }
    async apiFindGame(req, res, next) {
        let g = null;
        try {
            let game_slug = req.params.game_slug;
            g = await game.findGame(game_slug);
        } catch (e) {
            next(e);
            return;
        }

        if (Array.isArray(g)) {
            g = g[0];
        }
        res.json(g);
        return;
    }
};
