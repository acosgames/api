const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('fsg-shared/services/mysql.js');
const mysql = new MySQL();

const { GeneralError } = require('fsg-shared/util/errorhandler');

const GameService = require('fsg-shared/services/game');
const game = new GameService();

const storage = require('./storage');


module.exports = class GameAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();
        this.router = new Router();
        this.actionRouter = new Router();
    }


    routes(middleware) {
        middleware = middleware || ((req, res, next) => { next() })
        this.router.get('/api/v1/games', middleware, this.apiFindGames.bind(this));
        this.router.get('/api/v1/game/:game_slug', middleware, this.apiFindGame.bind(this));



        return this.router;
    }

    actionRoutes(middleware) {
        middleware = middleware || ((req, res, next) => { next() })
        this.actionRouter.get('/api/v1/game/person/:game_slug', middleware, this.apiFindGamePerson.bind(this));
        this.actionRouter.post('/api/v1/game/report', middleware, this.apiReportGame.bind(this));
        this.actionRouter.post('/api/v1/game/rate', middleware, this.apiRateGame.bind(this));


        return this.actionRouter;
    }

    async apiFindGamePerson(req, res, next) {
        let g = null;
        try {
            let user = req.user;
            let game_slug = req.params.game_slug;
            g = await game.findGamePerson(game_slug, user.shortid, user.displayname);
        }
        catch (e) {
            next(e);
            return;
        }

        if (Array.isArray(g)) {
            g = g[0];
        }
        res.json(g);
        return;
    }

    async apiReportGame(req, res, next) {



        try {
            let payload = req.body;
            let game_slug = payload.game_slug;
            let reportType = payload.reportType;

            let user = req.user;
            let shortid = user.shortid;

            if (reportType < 1 || reportType > 3) {
                next(new GeneralError('E_INVALIDTYPE'));
                return;
            }

            let results = await game.reportGame(game_slug, shortid, reportType);
            res.json(results);
        }
        catch (e) {
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


        if (typeof vote !== 'boolean') {
            next(new GeneralError('E_INVALIDTYPE'));
            return;
        }

        try {
            let votes = await game.rateGame(game_slug, shortid, vote, previousVote);
            res.json({ votes });
        }
        catch (e) {
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
            }
        }
        catch (e) {
            next(e);
            return;
        }

        res.json(games);
        return;
    }

    async apiFindGame(req, res, next) {
        let g = null;
        try {
            let game_slug = req.params.game_slug;
            g = await game.findGame(game_slug);
        }
        catch (e) {
            next(e);
            return;
        }

        if (Array.isArray(g)) {
            g = g[0];
        }
        res.json(g);
        return;
    }
}