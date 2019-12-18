const jwt = require("express-jwt");
exports.authenticated = jwt({
    secret: 'MY-SECRET-KEY'
});

exports.authorized = (req, res, next) => {
    if (req.Users.id != req.params.user_id) {
        return res.status(401).json({
            message: "You are not authenticated."
        });
    }
    next();
};