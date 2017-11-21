var Card = require('mongoose').model('Card'),
    config = require('../config/config');

exports.list = function (req, res) {
    Card.find({}, {_id: 0}, function (err, options) {
        return res.json(options);
    });
};

exports.get = function (req, res) {
//    get one card
};

exports.update = function (req, res) {
    Card.findOne({name: req.body.name}, function (err, card) {
        if (err || !card) {
            res.send({error: err});
        } else {
            card.parts = req.body.parts;
            card.update(function (err, card) {
                if (err) {
                    res.json(err);
                }
            })
        }
    });
};

exports.save = function (req, res) {
    var newCard = new Card(req.body);

    newCard.save(function (err, card) {
        if (err) {
            return next(err);
        }

        res.json(card)
    });
};