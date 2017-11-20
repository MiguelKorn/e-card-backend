var Card = require('mongoose').model('Card'),
    config = require('../config/config');

exports.list = function (req, res) {
    Card.find({}, { _id : 0 }, function(err, options) {
        return res.json(options);
    });
};

exports.get = function (req, res) {
//    get one card
};

exports.update = function (req, res) {
//    update card
};

exports.add = function (req, res) {
//    add card
};