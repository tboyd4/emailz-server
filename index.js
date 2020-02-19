// imports the express library, and assigns it to variable express
const express = require('express');

// importing mongoose library
const mongoose = require('mongoose');

const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);       // connecting mongoose to our mongoDB database through a URI

// importing the passport.js file
require('./services/passport');

// creating express application 
const app = express();

// requiring this returns a function, and then we are setting app as the parameter, effectively running the route as app.get
require('./routes/authRoutes')(app);

// telling express what port to listen to (either a dynamic port from Heroku, or 5000 on our local machine)
const PORT = process.env.PORT || 5000;
app.listen(PORT);