

const FacebookStrategy = require('passport-facebook').Strategy;
// const jwt = require('jsonwebtoken');
const credutil = require('shared/util/credentials');

module.exports = class FacebookAuth {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.strat = null;
    }

    strategy() {
        if (this.strat)
            return this.strat;

        var self = this;
        this.strat = new FacebookStrategy({
            callbackURL: this.credentials.facebookauth.redirect_uri,  //same URI as registered in Google console portal
            clientID: this.credentials.facebookauth.client_id, //replace with copied value from Google console
            clientSecret: this.credentials.facebookauth.client_secret,
            scope: this.credentials.facebookauth.scope,
            profileFields: this.credentials.facebookauth.fields || []
        },
            self.strategyCallback
        )

        return this.strat;
    }

    async strategyCallback(accessToken, refreshToken, profile, done) {
        try {
            let email = profile._json.email || profile?.emails[0]?.value || profile.id; //profile object has the user info

            //let [user] = await db('users').select(['id', 'name', 'email']).where('email', user_email); //check whether user exist in database
            let redirect_url = "";
            if (email) {
                return done(null, { email });  //redirect_url will get appended to req.user object : passport.js in action
            } else {
                return done(null, {});
            }
        }
        catch (error) {
            done(error)
        }
    }
}