// importing 3rd party libraries for passport
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users'); // giving one argument (the name) means we are referencing a model class already made

// importing keys file from congi
const keys = require('../config/keys');

// telling passport.js to understand and use the GoogleStrategy class, which will recieve some info it will need to use
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {                   // GoogleStrategy takes two arguements 1.) objects 2.) callback function

    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                // record already exists if this returns value
               
            } else {
                // we don't have a record, and we need to create one
                new User({ googleId: profile.id }).save();    
            }
        })                      
    })
);