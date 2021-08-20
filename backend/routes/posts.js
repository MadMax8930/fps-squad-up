const express = require('express');
const postsController = require('../controllers/posts.controller');

const authMiddleware = require('../middleware/auth');

const router = express.Router();

//Unauthenticated User
router.get('/posts', postsController.readAllPosts); // read all posts in general
router.get('/post/:id', postsController.readPost); // read one post by Id
router.get('/game/:gameId/posts', postsController.readAllPostsByGameId); // read all posts by gameId 
//Authenticated User
router.get('/user/:userId/posts', authMiddleware.checkAuth, postsController.readAllMyPosts); // get all posts of one user
router.post('/user/:userId/game/:gameId/post', authMiddleware.checkAuth, postsController.createPost); // create a post by gameId for one user
router.put('/user/:userId/post/:id', authMiddleware.checkAuth, postsController.updatePost); // update user's post
router.delete('/user/:userId/post/:id', authMiddleware.checkAuth, postsController.deletePost); // delete user's post

module.exports = router;