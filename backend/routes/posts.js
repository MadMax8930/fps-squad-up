const express = require('express');
const postsController = require('../controllers/posts.controller');

const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/post/:id', postsController.readPost);
router.get('/posts', postsController.readAllPosts); 
router.post('/user/:userId/post', authMiddleware.checkAuth, postsController.createPost);
router.put('/user/:userId/post/:id', authMiddleware.checkAuth, postsController.updatePost);
router.delete('/user/:userId/post/:id', authMiddleware.checkAuth, postsController.deletePost);

router.get('/game/:gameId/posts', postsController.readAllPosts); // read all posts by gameId
router.post('/user/:userId/game/:gameId/post', authMiddleware.checkAuth, postsController.createPost);

module.exports = router;