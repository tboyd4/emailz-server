const proxy = require('http-proxy-middleware')
 

module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}


// this fixes proxy errors with create react app 2.0 and 3.0