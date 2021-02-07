const credutil = require('forkoff-shared/util/credentials');
const { Router } = require('express');

const MySQL = require('forkoff-shared/services/mysql.js');
const mysql = new MySQL();

const PersonService = require('forkoff-shared/services/person');
const persons = new PersonService();


module.exports = class PersonAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
    }


    routes() {
        this.router.post('/person/create/displayname', this.createDisplayname);
        return this.router;
    }

    async createDisplayname(req, res, next) {
        let user = req.body;

        try {
            if (!user || !user.displayname) {
                res.json({ ecode: "E_MISSING_DISPLAYNAME" });
                return;
            }
            let sessionUser = req.session.user;
            user.id = sessionUser.id;
            user.displayname = user.displayname.replace(/[^A-Za-z0-9\_]/ig, "");
            user = await persons.updateUser(user);
        }
        catch (e) {
            next(e);
            return;
        }

        res.json(user);
        return;
    }

}