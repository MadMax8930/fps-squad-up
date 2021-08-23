const models = require('../models')
const validatorClass = require('fastest-validator');

exports.findAll = (req, res) => {
    models.Game.findAll().then((games) => {
        res.send(games)
    })
}

// models.Game.findAll().then((result) => {
//     res.status(201).json({
//         message: "Game(s) successfully found",
//         post: result
//     });
// }).catch(error => {
//     res.status(500).json({
//         message: "Game(s) not found!",
//         error: error
//     });
// });
