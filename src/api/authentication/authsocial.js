const passport = require('passport');
const credutil = require('shared/util/credentials');
const { Router } = require('express');
const GoogleAuth = require('./google');
const MicrosoftAuth = require('./microsoft');
const GithubAuth = require('./github');
const FacebookAuth = require('./facebook');

const MySQL = require('shared/services/mysql.js');
const mysql = new MySQL();

const PersonService = require('shared/services/person');
const persons = new PersonService();
const fs = require('fs');
const { GeneralError } = require('shared/util/errorhandler');

const JWT_PRIVATE_KEY = fs.readFileSync('./src/credentials/jwtRS256.key');

const creds = credutil();

module.exports = class SocialAuth {
    constructor(credentials) {
        this.credentials = credentials || creds;

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
                    res.json({ ecode: 'E_NOTAUTHORIZED' });
                    return;
                }
            }

            try {
                let user = await persons.decodeUserToken(jwtToken);
                if (!user) {
                    res.json({ ecode: 'E_NOTAUTHORIZED' });
                    return;
                }

                req.user = user;
            }
            catch (e) {
                res.json({ ecode: 'E_NOTAUTHORIZED' });
                return;
            }

            next();
        });
    }

    async logout(req, res) {

        //clear the cookie, and delete the user if they were a temporary user
        try {
            let jwtToken = req.cookies['X-API-KEY'];
            if (jwtToken == 'undefined' || !jwtToken) {
                res.json({ 'status': 'success' })
                return;
            }

            res.cookie('X-API-KEY', '', { maxAge: Date.now(), httpOnly: true, SameSite: 'Strict', overwrite: true });

            let user = await persons.decodeUserToken(jwtToken);
            if (user) {
                if (!user.email || user.email.length == 0) {
                    try {
                        let result = persons.deleteUser(user);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            }
        }
        catch (e) {
            res.json({ 'status': 'success' })
            return;
        }

        //respond with success
        res.json({ 'status': 'success' })
    }

    routes() {

        this.router.post('/login/temp', this.apiCreateTempUser.bind(this));

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


    async apiCreateTempUser(req, res, next) {
        try {
            let displayname = req.body?.displayname;

            if (!displayname) {
                res.json({ ecode: "E_MISSING_DISPLAYNAME" });
                return;
            }

            if (displayname) {
                displayname = displayname.replace(/[^A-Za-z0-9\_]/ig, '');

                if (displayname.length < 3) {
                    res.json({ ecode: "E_DISPLAYNAME_TOOSHORT" });
                    return;
                }
            }

            let existingUser = await persons.findUser({ displayname }, true);
            if (existingUser) {
                throw new GeneralError('E_PERSON_DUPENAME');
            }

            let user = await persons.createUser({ displayname });

            let tokenUser = {
                id: user.id,
                shortid: user.shortid,
                displayname: user.displayname,
                email: user.email,
                isdev: user.isdev,
                github: user.github,
                membersince: user.membersince
            }

            let token = await persons.encodeUserToken(tokenUser, JWT_PRIVATE_KEY);
            let decodedToken = await persons.decodeUserToken(token);

            let filteredUser = {
                id: user.id,
                shortid: user.shortid,
                displayname: user.displayname,
                email: user.email || null,
                github: user.github || null,
                membersince: user.membersince,
                isdev: user.isdev,
                ranks: [],
                devgames: [],
                token,
                exp: decodedToken.exp
            }

            res.cookie('X-API-KEY', token, { httpOnly: true, SameSite: 'Strict', overwrite: true })
            res.json(filteredUser);
        }
        catch (e) {
            next(e);
        }
    }


    async redirect(req, res) {
        let websiteurl = creds.platform.website.url;

        if (!req.user)
            res.redirect(websiteurl)


        // console.log(req.session.passport);
        let user = req.user;


        try {
            let jwtToken = req.cookies['X-API-KEY'];
            if (jwtToken) {
                let tokenUser = await persons.decodeUserToken(jwtToken);
                if (!(tokenUser?.email)) {

                    user = Object.assign({}, user, tokenUser);
                    let result = await persons.updateUser(user);
                }
            }
        }
        catch (e) {
            console.log(e);
            if (e.message == 'jwt expired') {

                //let it create new token by going to code below
            }
            else {
                res.redirect(`${websiteurl}/login/accountexists`)
                // res.json({ ecode: 'E_INVALID_USER_CREATE' });
                return;
            }

        }


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
                github: dbUser.github,
                membersince: dbUser.membersince
            }
            let token = await persons.encodeUserToken(tokenUser, JWT_PRIVATE_KEY);
            req.user = dbUser;


            res.cookie('X-API-KEY', token, { httpOnly: true, SameSite: 'Strict', overwrite: true })

            if (!dbUser.displayname || dbUser.displayname.length == 0 || dbUser.displayname == dbUser.apikey) {
                //res.setHeader('Set-Cookie', 'X-API-KEY=' + dbUser.apikey + '; HttpOnly');
                res.redirect(`${websiteurl}/player/create`);
                return;
            }

            // if (dbUser.isdev || (dbUser.github && dbUser.github.length > 0)) {
            //     res.redirect('http://localhost:8000/dev');
            //     return;
            // }

            //res.setHeader('Set-Cookie', 'X-API-KEY=' + dbUser.apikey + '; HttpOnly');
            res.redirect(`${websiteurl}/login/success`)
            return;
        }
        catch (e) {
            console.error(e);

        }

        res.redirect(`${websiteurl}/login/`);
    }

}