const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { checkToken } = require('../../auth_middleware/token_validation');
const auth = require('../../auth_middleware/token_validation');


// Signup a new user
router.post('/', userController.create);

// Login a user
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


// Admin Access
// Show all post: through Admin Access
router.get('/admin/getAll', userController.adminAccess);

// Show post ById: through Admin Access
router.get('/admin/:id', userController.adminGetById);

// Update post: through Admin Access
router.put('/admin/update/:id', userController.adminPostUpdate);

// Delete post ById: through Admin Access
router.delete('/admin/delete/:id', userController.adminPostDelete);


module.exports = router; 
