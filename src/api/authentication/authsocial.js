const passport = require('passport');
const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');
const GoogleAuth = require('./google');
const MicrosoftAuth = require('./microsoft');
const GithubAuth = require('./github');

const MySQL = require('fsg-shared/services/mysql.js');
const mysql = new MySQL();

const PersonService = require('fsg-shared/services/person');
const persons = new PersonService();


module.exports = class SocialAuth {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.google = new GoogleAuth(credentials);
        this.microsoft = new MicrosoftAuth(credentials);
        this.github = new GithubAuth(credentials);

        this.router = new Router();
        this.initialize();
    }

    initialize() {
        this.router.use(passport.initialize());
        passport.use(this.google.strategy())
        passport.use(this.microsoft.strategy());
        passport.use(this.github.strategy());

        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }

    auth() {
        let router = new Router();
        router.use(async (req, res, next) => {
            //let requestUserid = req.header('X-USER-ID');

            let user;
            if (req.session && req.session.user) {
                user = req.session.user;
            }

            if (!user) {
                user = {};
                let apikey = req.cookies['X-API-KEY'];
                if (apikey == 'undefined' || !apikey) {
                    apikey = req.header('X-API-KEY');
                    if (!apikey) {
                        res.json({ ecode: 'E_USER_NOTAUTHORIZED' });
                        return;
                    }

                }
                user.apikey = apikey;

                user = await persons.findUser(user);
                if (!user) {
                    res.json({ ecode: 'E_USER_NOTAUTHORIZED' });
                    return;
                }

                user.auth = true;
                req.session.user = user;
                req.session.prevUrl = req.originalUrl;

                next();
                return;
            }

            if (!user.auth) {
                res.json({ ecode: 'E_USER_NOTAUTHORIZED' });
                return;
            }

            user.auth = true;
            req.session.user = user;
            req.session.prevUrl = req.originalUrl;

            next();
        });
        return router;
    }

    logout(req, res) {
        req.session.user = null;
        req.session.destroy();
        res.cookie('X-API-KEY', '', { maxAge: Date.now(), httpOnly: true });

        res.json({ 'status': 'success' })
    }

    routes() {

        this.router.get('/logout', this.logout);
        this.router.get('/login/google', passport.authenticate('google', { session: false }));
        this.router.get('/oauth/google', passport.authenticate('google', { failureRedirect: '/', session: false }), this.redirect);

        this.router.get('/login/microsoft', passport.authenticate('microsoft', { session: false }));
        this.router.get('/oauth/microsoft', passport.authenticate('microsoft', { failureRedirect: '/', session: false }), this.redirect);

        this.router.get('/login/github', passport.authenticate('github', { session: false }));
        this.router.get('/oauth/github', passport.authenticate('github', { failureRedirect: '/', session: false }), this.redirect);


        return this.router;
    }

    async redirect(req, res) {
        if (!req.user)
            res.redirect('http://localhost:8000')


        // console.log(req.session.passport);
        let user = req.user;

        try {
            let dbUser = await persons.findOrCreateUser(user);
            if (!dbUser) {
                throw { ecode: "E_INVALID_USER_CREATE", info: { dbUser, user } };
            }

            dbUser.auth = true;
            req.session.user = dbUser;

            if (!dbUser.displayname || dbUser.displayname.length == 0 || dbUser.displayname == dbUser.apikey) {
                res.cookie('X-API-KEY', dbUser.apikey, { httpOnly: true })
                //res.setHeader('Set-Cookie', 'X-API-KEY=' + dbUser.apikey + '; HttpOnly');
                res.redirect('http://localhost:8000/player/create');
                return;
            }

            console.log(dbUser);
        }
        catch (e) {
            console.error(e);
            res.redirect('http://localhost:8000/login/');
            return;
        }

        res.cookie('X-API-KEY', req.session.user.apikey, { httpOnly: true })
        //res.setHeader('Set-Cookie', 'X-API-KEY=' + dbUser.apikey + '; HttpOnly');
        res.redirect('http://localhost:8000/games')
    }

    getDomain() {
        return `http://${process.env.HOST}:${process.env.PORT}`;
    }
}