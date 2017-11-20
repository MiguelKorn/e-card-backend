var card = require('../controllers/card.controller');

module.exports = function (app) {
    app.route('/cards')
        .get(card.list);
};