const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { checkToken } = require('../../../auth_middleware/token_validation');
const auth = require('../../../auth_middleware/token_validation');


// Signup a new user
router.post('/', userController.create);

// Signin a user
router.post('/login', userController.login);

// Retrieve a user
router.get('/', userController.getAll);

// Retrieve a single user with id
router.get('/:id', userController.getById);

// Update a user by put
router.put('/:id', userController.update);

// Update a user by patch
router.patch('/:id', userController.update);

// Delete a user
router.delete('/:id', userController.delete);

// Secret Routes
router.get('/verify', auth, (req, res, next) => {
    console.log("Token Verification");
});


// Show User post:
router.get('/v1/:id', userController.showUserPost);

// Show all post: Admin Access
router.get('/v1', userController.adminAccess);

// User forgotPassword:
router.put('/forgot-password', userController.forgotPassword);


module.exports = router; 
