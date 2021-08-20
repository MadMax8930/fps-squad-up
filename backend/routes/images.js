const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-uploader');

const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/uploads', authMiddleware.checkAuth, imageUploader.upload.single('image'), imageController.upload);

module.exports = router;