const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// retreive all user
router.get('/', userController.findAll);

// Retrieve a single user with id
router.get('/:id', userController.findById);

// Create a new user
router.post('/', userController.create);

// Update a user with id using put
router.put('/:id', userController.update);

// Update a user with id using patch
router.patch('/:id', userController.update);

// Delete a user with id
router.delete('/:id', userController.delete);


module.exports = router;