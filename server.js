/*
main application file. Starting point of the backend
 */

// init environment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'), // require DB
    express = require('./config/express'), // require web framework
    config = require('./config/config'),
    port = config.port;

// init DB
var db = mongoose();

// init web framework
var app = express();

// start listening on a port
app.listen(port);

module.exports = app;

console.log('Server running at http://localhost:' + port + '/');
