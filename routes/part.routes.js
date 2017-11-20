var part = require('../controllers/part.controller');

module.exports = function (app) {
    app.route('/parts')
        .get(part.list);
};