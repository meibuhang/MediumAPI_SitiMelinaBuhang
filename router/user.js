const verifySignUp = require('./verifySignUp');
module.exports = function (app) {
    const controller = require('../controllers/users');
    app.post('/api/auth/signup', controller.signup);
}