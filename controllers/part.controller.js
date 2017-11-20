var Part = require('mongoose').model('Part'),
    config = require('../config/config');

exports.list = function (req, res) {
    Part.find({}, { _id : 0 }, function(err, parts) {
        return res.json(parts);
    });
};