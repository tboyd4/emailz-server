// imports the express library, and assigns it to variable express
const express = require('express');

// importing 3rd party libraries
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// importing keys file from congi
const keys = require('./config/keys');

// creating express application (there can be multiple of these within a project)
const app = express();

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

// route handlers
    // route handles google auth login requests
app.get('/auth/google', passport.authenticate('google', {       // google string is interally known by passport as GoogleStrategy
    scope: ['profile', 'email']                                 // Object with scope specifies what information we are needing to get profile and email are internally known by google as things
})
);

app.get('/auth/google/callback', passport.authenticate('google'));



// telling express what port to listen to (either a dynamic port from Heroku, or 5000 on our local machine)
const PORT = process.env.PORT || 5000;
app.listen(PORT);