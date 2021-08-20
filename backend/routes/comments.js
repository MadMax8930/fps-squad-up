const express = require('express');
const commentsController = require('../controllers/comments.controller');

const authMiddleware = require('../middleware/auth');

const router = express.Router();

//Unauthenticated Visitor
router.get('/post/:postId/comment/:id', commentsController.showComment); // get a comment of one post
router.get('/post/:postId/comments', commentsController.showAllComments); // get all comments of one post
//Authenticated User
router.post('/user/:userId/post/:postId/comment', authMiddleware.checkAuth, commentsController.createComment); // create a comment on one specific post
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