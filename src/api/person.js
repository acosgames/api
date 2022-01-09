const credutil = require('shared/util/credentials');
const { Router } = require('express');

const MySQL = require('shared/services/mysql.js');
const mysql = new MySQL();

const PersonService = require('shared/services/person');
const persons = new PersonService();

const fs = require('fs');
const { GeneralError } = require('shared/util/errorhandler');
const JWT_PRIVATE_KEY = fs.readFileSync('./src/credentials/jwtRS256.key');

module.exports = class PersonAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
    }

    routesPublic() {
        this.router.get('/api/v1/person/:displayname', this.apiGetPlayer);
    }

    routes(middleware) {
        middleware = middleware || ((req, res, next) => { next() })
        this.router.post('/api/v1/person/create/displayname', middleware, this.apiCreateDisplayname);


        this.router.get('/api/v1/person/', middleware, this.apiGetProfile);



        return this.router;
    }

    async apiGetPlayer(req, res, next) {
        try {
            let displayname = req.params?.displayname;
            if (!displayname) {
                throw new GeneralError('E_PLAYER_NOTFOUND');
            }

            let user = await persons.findPlayer(displayname);

            res.json(user);
        }
        catch (e) {
            next(e);
            return;
        }

    }

    async apiGetProfile(req, res, next) {
        try {
            if (!req.user) {
                throw new GeneralError('E_NOTAUTHORIZED');
            }

            if (!req.user)
                throw new GeneralError('E_NOTAUTHORIZED');

            let user = await persons.findUser({ id: req.user.id });
            user.token = req.cookies['X-API-KEY'];
            //user.ranks = await persons.findPlayerRanks(user.shortid);

            res.json(user);
        }
        catch (e) {
            next(e);
            return;
        }
    }

    async apiCreateDisplayname(req, res, next) {
        let user = req.body;

        try {
            if (!user || !user.displayname) {
                res.json({ ecode: "E_MISSING_DISPLAYNAME" });
                return;
            }

            if (user && user.displayname) {
                user.displayname = user.displayname.replace(/[^A-Za-z0-9\_]/ig, '');

                if (user.displayname.length < 3) {
                    res.json({ ecode: "E_DISPLAYNAME_TOOSHORT" });
                    return;
                }
            }

            let sessionUser = req.user;
            user.id = sessionUser.id;
            user.displayname = user.displayname;
            user = await persons.createDisplayName(user);

            let tokenUser = {
                id: user.id,
                shortid: sessionUser.shortid,
                displayname: user.displayname,
                email: sessionUser.email,
                isdev: sessionUser.isdev,
                github: sessionUser.github
            }
            let token = await persons.encodeUserToken(tokenUser, JWT_PRIVATE_KEY);

            res.cookie('X-API-KEY', token, { httpOnly: true, SameSite: 'Strict' })
        }
        catch (e) {
            next(e);
            return;
        }

        res.json(user);
        return;
    }

}