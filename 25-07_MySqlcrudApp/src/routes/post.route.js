const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');
const { tokenVerify, isAdmin, isUser } = require('../../middleware/validation');


// Create a new user
router.post('/', tokenVerify, postController.create);

// retreive all post
router.get('/', tokenVerify, postController.getAll);

// Retrieve a single post with id
router.get('/:id', tokenVerify, postController.getById);

// Update a post with id using put
router.put('/:id', tokenVerify, postController.update);

// Update a post with id using patch
router.patch('/:id', tokenVerify, postController.update);

// Delete a user with id
router.delete('/:id', tokenVerify, postController.delete);


module.exports = router; 