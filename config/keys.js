// logic to decide what credentials to use

if (process.env.NODE_ENV === 'production') {
    // we are in production, use production keys
    module.exports = require('./prod');
} else {
    // we are in development, use developement keys
    module.exports = require('./dev');
}
