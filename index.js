// imports the express library, and assigns it to variable express
const express = require('express');

// importing mongoose library
const mongoose = require('mongoose');

// import the cookie session library
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);       // connecting mongoose to our mongoDB database through a URI
require('./models/User');   // this makes sure the User.js file runs on load

// importing the passport.js file
require('./services/passport');

// creating express application 
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,  // this makes the cookie session, and asks express to use it with the key that we made
        keys: [keys.cookieKey]
    })
);

// requiring this returns a function, and then we are setting app as the parameter, effectively running the route as app.get
require('./routes/authRoutes')(app);

// telling express what port to listen to (either a dynamic port from Heroku, or 5000 on our local machine)
const PORT = process.env.PORT || 5000;
app.listen(PORT);