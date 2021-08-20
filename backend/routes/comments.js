
const express = require('express');
const commentsController = require('../controllers/comments.controller');

const router = express.Router();

router.post('/comments', commentsController.createComment);
router.get('/comments', commentsController.showAllComments);
router.get('/comments/:id', commentsController.showComment);
router.patch('/comments/:id', commentsController.updateComment);
router.delete('/comments/:id', commentsController.deleteComment);

module.exports = router;