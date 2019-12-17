const db = require('../config/dotenv');
const db_user = db.user;
var bycrypt = require('bcrypt-nodejs')

exports.signup = (req, res) => {
    console.log("Processing func ->Register");
    var dataEmail = req.body.email;
    var salt = bycrypt.genSaltSync(10);
    db_user.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: dataEmail,
        password: bycrypt.hashSync(req.body.password, salt),
        is_active: req.body.is_active
    }).then(data => {
        res.status(200).send({
            "item": data,
            "message": "User registered successfully!"
        });
    }).catch(err => {
        res.status(500).json({
            "message": "Error"
        })
    });
}