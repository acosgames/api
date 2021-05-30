const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('fsg-shared/services/mysql.js');
const mysql = new MySQL();

const PersonService = require('fsg-shared/services/person');
const persons = new PersonService();


module.exports = class PersonAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
    }


    routes() {
        this.router.post('/api/v1/person/create/displayname', this.apiCreateDisplayname);

        this.router.get('/api/v1/person/', this.apiGetProfile);
        return this.router;
    }

    async apiGetProfile(req, res, next) {
        let user = null;
        try {
            let sessionUser = req.session.user;
            if (!sessionUser.id) {
                throw new GeneralError('E_USER_NOTAUTHORIZED');
            }
            if (sessionUser) {
                res.json(sessionUser);
                return;
            }
            user = await persons.findUser({ id: sessionUser.id });
        }
        catch (e) {
            next(e);
            return;
        }

        res.json(user);
        return;
    }

    async apiCreateDisplayname(req, res, next) {
        let user = req.body;

        try {
            if (!user || !user.displayname) {
                res.json({ ecode: "E_MISSING_DISPLAYNAME" });
                return;
            }
            let sessionUser = req.session.user;
            user.id = sessionUser.id;
            user.displayname = user.displayname;
            user = await persons.createDisplayName(user);
        }
        catch (e) {
            next(e);
            return;
        }

        res.json(user);
        return;
    }

}