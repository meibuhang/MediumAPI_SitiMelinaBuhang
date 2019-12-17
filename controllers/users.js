const Users = require('../models').users;
const bycrypt = require('bcrypt-nodejs');
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
    console.log("Processing func ->Register");
    const dataEmail = req.body.email;
    const salt = bycrypt.genSaltSync(10);
    Users.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: dataEmail,
        password: bycrypt.hashSync(req.body.password, salt),
        is_active: req.body.is_active
    }).then(data => {
        const token = jwt.sign({
            id: data.id
        }, 'MY-SECRET-KEY');
        res.status(200).send({
            "item": data,
            token,
            "message": "User registered successfully!"
        });
    }).catch(err => {
        res.status(500).json({
            "message": "Error"
        })
    });
}
//             if (data) {
//                 const token = jwt.sign({
//                     id: data.id
//                 }, 'MY-SECRET-KEY');
//                 res.send({
//                     id: user.id,
//                     token
//                 });
//             }
//         })
//         .catch(Sequelize.ValidationError, err => {
//             return res.status(406).send({
//                 message: "Invalid username or email."
//             });
//         })
//         .catch(err => {
//             return res.status(400).send({
//                 message: err.message
//             });
//         });
// };