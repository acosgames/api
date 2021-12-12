
const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');

const DevGameService = require('fsg-shared/services/devgame');
const devgame = new DevGameService();

module.exports = class DevAuth {
    constructor(credentials) {
        this.credentials = credentials || credutil();
    }

    auth = async (req, res, next) => {

        let apikey = req.header('X-GAME-API-KEY');
        if (!apikey) {
            res.json({ ecode: 'E_NOTAUTHORIZED' });
            return;
        }

        let comment = apikey.indexOf('.');
        if (comment > -1) {
            apikey = apikey.substr(comment + 1);
        }

        let game = { apikey };
        game = await devgame.findGame(game);
        if (!game) {
            res.json({ ecode: 'E_NOTAUTHORIZED' });
            return;
        }

        next();
    }

    getDomain() {
        return `http://${process.env.HOST}:${process.env.PORT}`;
    }
}