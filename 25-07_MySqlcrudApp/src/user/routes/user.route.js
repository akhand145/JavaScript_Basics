const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { checkToken } = require('../../../auth_middleware/token_validation');
const auth = require('../../../auth_middleware/token_validation');


// Secret Routes
router.get('/verify', auth, (req, res, next) => {
    console.log("Token Verification");
});

// Retrieve a user
router.get('/', userController.getAll);

// Retrieve a single user with id
router.get('/:id', userController.getById);

// Register a new user
router.post('/', userController.create);

// Update a user by put
router.put('/:id', userController.update);

// Update a user by patch
router.patch('/:id', userController.update);

// Delete a user
router.delete('/:id', userController.delete);

// Login a user
router.post('/login', userController.login);


module.exports = router; 
