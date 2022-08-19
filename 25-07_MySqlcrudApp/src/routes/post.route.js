const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');
const middleware = require('../../middleware/validation');


// Create a new user
router.post('/', middleware.tokenVerify, middleware.isUser, postController.create);

// retreive all post
router.get('/', middleware.tokenVerify, middleware.isUser, postController.getAll);

// Retrieve a single post with id
router.get('/:id', middleware.tokenVerify, middleware.isUser, postController.getById);

// Update a post with id using put
router.put('/:id', middleware.tokenVerify, middleware.isUser, postController.update);

// Update a post with id using patch
router.patch('/:id', middleware.tokenVerify, middleware.isUser, postController.update);

// Delete a user with id
router.delete('/:id', middleware.tokenVerify, middleware.isUser, postController.delete);


module.exports = router; 