// importing 3rd party libraries for passport
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users"); // giving one argument (the name) means we are referencing a model class already made

passport.serializeUser((user, done) => {
  // turns user id into a cookie
  done(null, user.id); // this user references the user in the collection db, and the user id references a unique id given by mongo, not the profile id from google
});

passport.deserializeUser((id, done) => {
  // turns cookie back into a user instance
  User.findById(id).then(user => {
    done(null, user);
  });
});

// importing keys file from congi
const keys = require("../config/keys");

// telling passport.js to understand and use the GoogleStrategy class, which will recieve some info it will need to use
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // GoogleStrategy takes two arguements 1.) objects 2.) callback function

      const existingUser = await User.findOne({ googleId: profile.id }); // this is asychronous

      if (existingUser) {
        // record already exists if this returns value
        return done(null, existingUser);
      }

        // we don't have a record, and we need to create one
        const user = await new User({ googleId: profile.id }).save() // this is asychronous
        done(null, user)
      
    }
  )
);
