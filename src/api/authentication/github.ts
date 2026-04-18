
import PassportGithub2 from 'passport-github2';
// const jwt = require('jsonwebtoken');
import credutil from 'shared/util/credentials.js';

const GithubStrategy = PassportGithub2.Strategy;

export default class GithubAuth {
    credentials: any;
    strat: any;
    constructor(credentials?:any) {
        this.credentials = credentials || credutil();

        this.strat = null;
    }

    strategy() {
        if (this.strat)
            return this.strat;

        var self = this;
        this.strat = new GithubStrategy({
            callbackURL: this.credentials.githubauth.redirect_uri,  //same URI as registered in Google console portal
            clientID: this.credentials.githubauth.client_id, //replace with copied value from Google console
            clientSecret: this.credentials.githubauth.client_secret,
            scope: this.credentials.githubauth.scope
        },
            self.strategyCallback
        )

        return this.strat;
    }

    async strategyCallback(accessToken, refreshToken, profile, done) {
        try {
            let email = profile.emails && profile.emails[0].value; //profile object has the user info

            //github accounts may share email with gmail/microsoft
            // but these are always potential dev accounts
            // so, mark them so
            email = email.replace('@', '+acosdev@');
            let github = profile.username;
            let github_id = parseInt(profile.id);
            // let displayname = github;
            //let [user] = await db('users').select(['id', 'name', 'email']).where('email', user_email); //check whether user exist in database
            let redirect_url = "";
            if (email) {
                return done(null, { email, github, github_id });  //redirect_url will get appended to req.user object : passport.js in action
            } else {
                return done(null, {});
            }
        }
        catch (error) {
            done(error)
        }
    }
}