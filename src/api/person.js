const credutil = require("shared/util/credentials");
const { Router } = require("express");

const MySQL = require("shared/services/mysql.js");
const mysql = new MySQL();

const PersonService = require("shared/services/person");
const persons = new PersonService();

const fs = require("fs");
const { GeneralError } = require("shared/util/errorhandler");
const { getCountry } = require("shared/services/country");
const JWT_PRIVATE_KEY = fs.readFileSync("./src/credentials/jwtRS256.key");

module.exports = class PersonAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.routerPublic = new Router();
        this.router = new Router();
    }

    routesPublic() {
        this.routerPublic.get("/api/v1/person/:displayname", this.apiGetPlayer);

        this.routerPublic.get("/api/v1/country", this.apiGetCountry);
        return this.routerPublic;
    }

    routes(middleware) {
        middleware =
            middleware ||
            ((req, res, next) => {
                next();
            });
        this.router.post(
            "/api/v1/person/create/displayname",
            middleware,
            this.apiCreateDisplayname
        );

        this.router.get("/api/v1/person/", middleware, this.apiGetProfile);

        return this.router;
    }

    async apiGetCountry(req, res, next) {
        try {
            let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
            let countrycode = getCountry(ip);

            res.json({ countrycode });
        } catch (e) {
            next(e);
            return;
        }
    }
    async apiGetPlayer(req, res, next) {
        try {
            let displayname = req.params?.displayname;
            if (!displayname) {
                throw new GeneralError("E_PLAYER_NOTFOUND");
            }

            let user = await persons.findPlayer(displayname);

            res.json(user);
        } catch (e) {
            next(e);
            return;
        }
    }

    async apiGetProfile(req, res, next) {
        try {
            if (!req.user) {
                throw new GeneralError("E_NOTAUTHORIZED");
            }

            if (!req.user.shortid) throw new GeneralError("E_NOTAUTHORIZED");

            let user = await persons.findUser({ shortid: req.user.shortid });

            if (!user) throw new GeneralError("E_NOTAUTHORIZED");

            let filteredUser = {
                id: user.id,
                shortid: user.shortid,
                displayname: user.displayname,
                countrycode: user.countrycode,
                portraitid: user.portraitid,
                email: user.email,
                github: user.github,
                membersince: user.membersince,
                isdev: user.isdev,
                level: user.level,
                points: user.points,
                ranks: user.ranks,
                devgames: user.devgames,
            };

            filteredUser.token = req.cookies["X-API-KEY"];
            filteredUser.exp = req.user?.exp || 0;
            //user.ranks = await persons.findPlayerRanks(user.shortid);

            res.json(filteredUser);
        } catch (e) {
            next(e);
            return;
        }
    }

    async apiCreateDisplayname(req, res, next) {
        let user = req.body;
        let filteredUser = {};
        try {
            if (!user || !user.displayname) {
                res.json({ ecode: "E_MISSING_DISPLAYNAME" });
                return;
            }

            if (user && user.displayname) {
                user.displayname = user.displayname.replace(
                    /[^A-Za-z0-9\_]/gi,
                    ""
                );

                if (user.displayname.length < 3) {
                    res.json({ ecode: "E_DISPLAYNAME_TOOSHORT" });
                    return;
                }
            }

            let portraitid =
                user?.portraitid ||
                Math.floor(Math.random() * (2104 - 1 + 1) + 1);
            let countrycode = user?.countrycode || "US";

            let sessionUser = req.user;
            user.shortid = sessionUser.shortid;
            user.displayname = user.displayname;
            user.portraitid = portraitid;
            user.countrycode = countrycode;

            user = await persons.createDisplayName(user);

            let tokenUser = {
                // id: user.id,
                shortid: sessionUser.shortid,
                displayname: user.displayname,
                email: sessionUser.email,
                github: sessionUser.github ? 1 : 0,
                // email: sessionUser.email,
                isdev: sessionUser.isdev,
                // github: sessionUser.github
            };
            let token = await persons.encodeUserToken(
                tokenUser,
                JWT_PRIVATE_KEY
            );

            filteredUser = {
                id: user.id,
                shortid: sessionUser.shortid,
                displayname: user.displayname,
                countrycode: user.countrycode,
                portraitid: user.portraitid,
                email: sessionUser.email,
                github: sessionUser.github,
                membersince: sessionUser.membersince,
                level: user.level,
                points: user.points,
                isdev: sessionUser.isdev,
                ranks: sessionUser.ranks,
                devgames: sessionUser.devgames,
            };

            res.cookie("X-API-KEY", token, {
                httpOnly: true,
                SameSite: "Strict",
                overwrite: true,
            });
        } catch (e) {
            next(e);
            return;
        }

        res.json(filteredUser);
        return;
    }
};
