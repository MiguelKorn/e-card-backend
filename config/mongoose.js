/**
 * Configuration for Mongoose + setting up connection
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    // load the DB schema's
    require('../models/card.model');
    require('../models/part.model');

    return db;
};