const passport = require('passport');

module.exports = (app) => {

    // route handles google auth login requests
    app.get('/auth/google', passport.authenticate('google', {       // google string is interally known by passport as GoogleStrategy
        scope: ['profile', 'email']                                 // Object with scope specifies what information we are needing to get profile and email are internally known by google as things
    })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));
}

// this file returns a function when it is required. 

