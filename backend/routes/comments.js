const express = require('express');
const commentsController = require('../controllers/comments.controller');

const authMiddleware = require('../middleware/auth');

const router = express.Router();

//Authenticated User
router.get('/user/post/:postId/comments', authMiddleware.checkAuth, commentsController.showAllComments); // read all comments on one specific post
router.post('/user/post/:postId/comment', authMiddleware.checkAuth, commentsController.createComment); // create a comment on one specific post
router.put('/user/:userId/post/:postId/comment/:id', authMiddleware.checkAuth, commentsController.updateComment); // update my comment on any post by postId
router.delete('/user/:userId/post/:postId/comment/:id', authMiddleware.checkAuth, commentsController.deleteComment); // delete my comment on any post by postId


// router.get('/post/:id', postsController.readPost);
// router.get('/posts', postsController.readAllPosts); 
// router.post('/user/:userId/post', authMiddleware.checkAuth, postsController.createPost);
// router.put('/user/:userId/post/:id', authMiddleware.checkAuth, postsController.updatePost);
// router.delete('/user/:userId/post/:id', authMiddleware.checkAuth, postsController.deletePost);

// router.get('/game/:gameId/posts', postsController.readAllPosts); // read all posts by gameId
// router.post('/user/:userId/game/:gameId/post', authMiddleware.checkAuth, postsController.createPost); // post a post by gameId

module.exports = router;