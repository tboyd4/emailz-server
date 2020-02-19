// importing 3rd party libraries for passport
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// importing keys file from congi
const keys = require('../config/keys');

// telling passport.js to understand and use the GoogleStrategy class, which will recieve some info it will need to use
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {                   // GoogleStrategy takes two arguements 1.) objects 2.) callback function
    console.log('access token : ' + accessToken);
    console.log('refresh token : ' + refreshToken);   
    console.log('profile : ' + profile);                     
})
);