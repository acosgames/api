import StatService from "shared/services/stats.js";
import credutil from 'shared/util/credentials.js';
import { Router } from "express";
import MySQL from 'shared/services/mysql.js';
const mysql = new MySQL();
export default class StatsAPI {
    credentials;
    router;
    actionRouter;
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
        this.router.post("/api/v1/player/stats/:game_slug", middleware, this.apiPlayerStatHistory.bind(this));
        this.router.post("/api/v1/player/globalstats/:game_slug", middleware, this.apiPlayerGlobalStats.bind(this));
        return this.router;
    }
    apiPlayerGlobalStats(req, res, next) {
        try {
            const game_slug = req.params.game_slug;
            const { shortid } = req.body;
            if (!game_slug || !shortid) {
                res.json({ ecode: 'E_INVALID_REQUEST' });
                return;
            }
            StatService.getPlayerGlobalStats({ shortid, game_slug }).then((stats) => {
                res.json(stats || []);
            }).catch((e) => {
                next(e);
            });
        }
        catch (e) {
            next(e);
        }
    }
    apiPlayerStatHistory(req, res, next) {
        let params = null;
        try {
            let game_slug = req.params.game_slug;
            let { shortid, stat_slug, days } = req.body;
            if (!game_slug || !shortid || !stat_slug) {
                res.json({ ecode: 'E_INVALID_REQUEST' });
                return;
            }
            StatService.getUserStatHistory({ shortid, game_slug, stat_slug, days }).then((history) => {
                res.json(history || []);
            }).catch((e) => {
                next(e);
            });
        }
        catch (e) {
            next(e);
        }
    }
}
//# sourceMappingURL=stats.js.map