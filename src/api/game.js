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
    }


    routes(middleware) {
        middleware = middleware || ((req, res, next) => { next() })
        this.router.get('/api/v1/games', middleware, this.apiFindGames.bind(this));
        this.router.get('/api/v1/game/:game_slug', middleware, this.apiFindGame.bind(this));

        return this.router;
    }

    async apiFindGames(req, res) {
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