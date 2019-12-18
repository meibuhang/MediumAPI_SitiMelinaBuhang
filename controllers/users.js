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


//Sign In
exports.signIn = (req, res) => {
    Users.findOne({
        where: {
            username: req.body.username
        }
    }).then(data => {
        if (data) {
            const auths = bycrypt.compareSync(req.body.password, data.password);
            if (auths) {
                const token = jwt.sign({
                    id: data.id
                }, 'MY-SECRET-KEY');
                res.status(200).send({
                    "item": data,
                    token,
                    "message": "User Success Login!"

                });
            } else {
                res.status(401).send({
                    "message": "Invalid username or email"
                });
            }
        }
    })
}