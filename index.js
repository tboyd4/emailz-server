// imports the express library, and assigns it to variable express
const express = require('express');

// creating express application (there can be multiple of these within a project)
const app = express();

// creating first route handler
app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
})

// telling express what port to listen to (either a dynamic port from Heroku, or 5000 on our local machine)
const PORT = process.env.PORT || 5000;
app.listen(PORT);