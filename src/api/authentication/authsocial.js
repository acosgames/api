const passport = require('passport');
const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');
const GoogleAuth = require('./google');
const MicrosoftAuth = require('./microsoft');
const GithubAuth = require('./github');
const FacebookAuth = require('./facebook');

const MySQL = require('fsg-shared/services/mysql.js');
const mysql = new MySQL();

const PersonService = require('fsg-shared/services/person');
const persons = new PersonService();
const fs = require('fs');

const JWT_PRIVATE_KEY = fs.readFileSync('./src/credentials/jwtRS256.key');
module.exports = class SocialAuth {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.google = new GoogleAuth(credentials);
        this.microsoft = new MicrosoftAuth(credentials);
        this.github = new GithubAuth(credentials);
        this.facebook = new FacebookAuth(credentials);

        this.router = new Router();
        this.initialize();
    }

    initialize() {
        this.router.use(passport.initialize());
        passport.use(this.google.strategy())
        passport.use(this.microsoft.strategy());
        passport.use(this.github.strategy());
        passport.use(this.facebook.strategy());

        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }

    auth() {
        return (async (req, res, next) => {

            let jwtToken = req.cookies['X-API-KEY'];
            if (jwtToken == 'undefined' || !jwtToken) {
                jwtToken = req.header('X-API-KEY');
                if (!jwtToken) {
                    res.json({ ecode: 'E_USER_NOTAUTHORIZED' });
                    return;
                }
            }

            try {
                let user = await persons.decodeUserToken(jwtToken);
                if (!user) {
                    res.json({ ecode: 'E_USER_NOTAUTHORIZED' });
                    return;
                }

                req.user = user;
            }
            catch (e) {
                res.json({ ecode: 'E_USER_NOTAUTHORIZED' });
                return;
            }

            next();
        });
    }

    logout(req, res) {
        // req.session.user = null;
        // req.session.destroy();
        res.cookie('X-API-KEY', '', { maxAge: Date.now(), httpOnly: true, SameSite: 'Strict' });

        res.json({ 'status': 'success' })
    }

    routes() {


        this.router.get('/logout', this.logout);
        this.router.get('/login/google', passport.authenticate('google', { session: false }));
        this.router.get('/oauth/google', passport.authenticate('google', { failureRedirect: '/', session: false }), this.redirect);

        this.router.get('/login/microsoft', passport.authenticate('microsoft', { session: false }));
        this.router.get('/oauth/microsoft', passport.authenticate('microsoft', { failureRedirect: '/', session: false }), this.redirect);

        this.router.get('/login/facebook', passport.authenticate('facebook', { session: false }));
        this.router.get('/oauth/facebook', passport.authenticate('facebook', { failureRedirect: '/', session: false }), this.redirect);


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

            // dbUser.auth = true;
            // req.session.user = dbUser;
            console.log(dbUser);
            let tokenUser = {
                id: dbUser.id,
                shortid: dbUser.shortid,
                displayname: dbUser.displayname,
                email: dbUser.email,
                isdev: dbUser.isdev,
                github: dbUser.github
            }
            let token = await persons.encodeUserToken(tokenUser, JWT_PRIVATE_KEY);
            req.user = dbUser;


            res.cookie('X-API-KEY', token, { httpOnly: true, SameSite: 'Strict' })

            if (!dbUser.displayname || dbUser.displayname.length == 0 || dbUser.displayname == dbUser.apikey) {
                //res.setHeader('Set-Cookie', 'X-API-KEY=' + dbUser.apikey + '; HttpOnly');
                res.redirect('http://localhost:8000/player/create');
                return;
            }

            // if (dbUser.isdev || (dbUser.github && dbUser.github.length > 0)) {
            //     res.redirect('http://localhost:8000/dev');
            //     return;
            // }

            //res.setHeader('Set-Cookie', 'X-API-KEY=' + dbUser.apikey + '; HttpOnly');
            res.redirect('http://localhost:8000/login/success')
            return;
        }
        catch (e) {
            console.error(e);

        }

        res.redirect('http://localhost:8000/login/');
    }

    getDomain() {
        return `http://${process.env.HOST}:${process.env.PORT}`;
    }
}