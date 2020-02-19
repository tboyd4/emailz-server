// imports the express library, and assigns it to variable express
const express = require('express');

// importing 3rd party libraries
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// creating express application (there can be multiple of these within a project)
const app = express();

// telling passport.js to understand and use the GoogleStrategy class, which will recieve some info it will need to use
passport.use(new GoogleStrategy());



// route handlers




// telling express what port to listen to (either a dynamic port from Heroku, or 5000 on our local machine)
const PORT = process.env.PORT || 5000;
app.listen(PORT);