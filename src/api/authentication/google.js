

const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const jwt = require('jsonwebtoken');
const credutil = require('shared/util/credentials');



module.exports = class GoogleAuth {
  constructor(credentials) {
    this.credentials = credentials || credutil();

    this.strat = null;
  }

  strategy() {
    if (this.strat)
      return this.strat;

    var self = this;
    this.strat = new GoogleStrategy({
      callbackURL: this.credentials.googleauth.redirect_uri,  //same URI as registered in Google console portal
      clientID: this.credentials.googleauth.client_id, //replace with copied value from Google console
      clientSecret: this.credentials.googleauth.client_secret,
      scope: this.credentials.googleauth.scope
    },
      self.strategyCallback
    )

    return this.strat;
  }

  async strategyCallback(accessToken, refreshToken, profile, done) {
    try {
      let user_email = profile.emails && profile.emails[0].value; //profile object has the user info
      //let [user] = await db('users').select(['id', 'name', 'email']).where('email', user_email); //check whether user exist in database
      let redirect_url = "";
      if (user_email) {
        return done(null, { email: user_email });  //redirect_url will get appended to req.user object : passport.js in action
      } else {
        return done(null, {});
      }
    }
    catch (error) {
      done(error)
    }
  }
}