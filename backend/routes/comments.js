
const express = require('express');
const commentsController = require('../controllers/comments.controller');

const router = express.Router();

router.get('/post/:postId/comments', commentsController.showAllComments); //Show all comments for a specific post
router.get('/post/:postId/comment/:id', commentsController.showComment); //
router.post('/user/:userId/post/:postId/comment', commentsController.createComment);
router.patch('/user/:userId/post/:postId/comment/:id', commentsController.updateComment);
router.delete('/user/:userId/post/:postId/comment/:id', commentsController.deleteComment);

module.exports = router;