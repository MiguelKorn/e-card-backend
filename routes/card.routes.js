var card = require('../controllers/card.controller');

module.exports = function (app) {
    app.route('/cards')
        .get(card.list)
        .post(card.save);

    app.route('/updateCard')
        .post(card.update);
};