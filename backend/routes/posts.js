const express = require('express');
const postsController = require('../controllers/posts.controller');

const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/posts', authMiddleware.checkAuth, postsController.createPost);
router.get('/posts/:id', postsController.readPost);
router.get('/posts', postsController.readAllPosts);
router.put('/posts/:id', authMiddleware.checkAuth, postsController.updatePost);
router.delete('/posts/:id', authMiddleware.checkAuth, postsController.deletePost);

module.exports = router;