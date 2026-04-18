
import credutil from 'shared/util/credentials.js';
import { Router } from 'express';

import DevGameService from 'shared/services/devgame.js';
const devgame = new DevGameService();

export default class DevAuth {
    credentials: any;
    constructor(credentials?:any) {
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

        req.game = game;
        req.res = res;

        next();
    }

    getDomain() {
        return `http://${process.env.HOST}:${process.env.PORT}`;
    }
}