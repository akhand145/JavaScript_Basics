const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');
const auth = require('../../auth_middleware/token_validation');


// Create a new user
router.post('/', auth, postController.create);

// retreive all post
router.get('/', auth, postController.getAll);

// Retrieve a single post with id
router.get('/:id', auth, postController.getById);

// Update a post with id using put
router.put('/:id', auth, postController.update);

// Update a post with id using patch
router.patch('/:id', auth, postController.update);

// Delete a user with id
router.delete('/:id', auth, postController.delete);


module.exports = router; 