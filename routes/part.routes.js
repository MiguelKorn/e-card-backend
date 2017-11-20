var option = require('../controllers/option.controller');

module.exports = function (app) {
    app.route('/options')
        .get(option.list);
};