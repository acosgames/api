const passport = require('passport');
const credutil = require('forkoff-shared/util/credentials');
const { Router } = require('express');
const GoogleAuth = require('./google');

const MySQL = require('forkoff-shared/services/mysql.js');
const mysql = new MySQL();

const UserService = require('forkoff-shared/services/user');
const users = new UserService();


module.exports = class SocialAuth {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.google = new GoogleAuth(credentials);

        this.router = new Router();
        this.initialize();
    }

    initialize() {
        this.router.use(passport.initialize());
        passport.use(this.google.strategy())

        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }

    routes() {

        this.router.get('/login/google', passport.authenticate('google', { scope: ['email'] }));
        this.router.get('/oauth/google', passport.authenticate('google', { failureRedirect: '/' }), this.redirect);

        return this.router;
    }

    async redirect(req, res) {
        if (!req.session || !req.session.passport)
            res.redirect('http://localhost:3000')


        console.log(req.session.passport);
        let user = req.session.passport;

        try {
            let dbUser = await users.findOrCreateUser(user.email);
            if (!dbUser) {
                throw { code: "E_INVALID_USER_CREATE", info: { dbUser, user } };
            }
            console.log(results);
        }
        catch (e) {
            console.error(e);
        }


        res.redirect('http://localhost:3000')
    }

    getDomain() {
        return `http://${process.env.HOST}:${process.env.PORT}`;
    }
}