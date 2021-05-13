const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('fsg-shared/services/mysql.js');
const mysql = new MySQL();

const { GeneralError } = require('fsg-shared/util/errorhandler');

const GameService = require('fsg-shared/services/game');
const game = new GameService();

module.exports = class GameAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();
        this.router = new Router();
    }


    routes() {

        this.router.get('/api/v1/games', this.apiFindGames.bind(this));

        return this.router;
    }

    async apiFindGames(req, res) {
        let games = null;
        try {

            games = await game.findGames();
        }
        catch (e) {
            next(e);
            return;
        }

        res.json(games);
        return;
    }
}