const express = require('express');
const usersController = require('../controllers/users.controller');

const router = express.Router();

router.post('/user/register', usersController.register);
router.post('/user/login', usersController.login);

module.exports = router;