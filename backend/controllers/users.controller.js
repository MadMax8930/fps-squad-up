const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

////////////// User Registration ///////////////

function register(req, res) {

    ///// Duplicate Email Check /////

    models.User.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {
            res.status(409).json({
                message: "Email already exists!",
            });
        } else {

            ///// Password Hashing /////

            bcryptjs.genSalt(10, function (err, salt) {
                bcryptjs.hash(req.body.password, salt, function (err, hash) {
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }

                    models.User.create(user).then(result => {
                        res.status(201).json({
                            message: "User successfully created",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong!"
                        });
                    });
                });
            });
        }

    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

////////////// User Login ///////////////

function login(req, res) {
    
    ///// Login to an existing email /////

    models.User.findOne({ where: { email: req.body.email } }).then(user => {
        console.log(user)
        if (user === null) {
            res.status(401).json({
                message: "Invalid credentials!"
            });
        } else {
            bcryptjs.compare(req.body.password, user.password, function (err, result) {

                ///// User Token generation if password match /////
                
                if (result) {                  // Token creation
                    const token = jwt.sign({   // Sign function jwt package
                        userId: user.id        // Grab userId ( : parameter content)
                    }, process.env.JWT_KEY)    // Make sure the token won't be modified by someone else
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token,      // Token retrieval
                            userId: user.id
                        })
                } else {
                    res.status(401).json({
                        message: "Invalid credentials!"
                    });
                }
            });

        }

    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

/////// EXPORTS ///////

module.exports = {
    register: register,
    login: login
}