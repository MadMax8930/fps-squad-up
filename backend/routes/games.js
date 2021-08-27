const express = require('express');
const gamesController = require('../controllers/games.controller');

const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/games', authMiddleware.checkAuth, gamesController.findGames)

module.exports = router;