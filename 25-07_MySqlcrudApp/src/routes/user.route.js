const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { checkToken } = require('../../middleware/validation');
const middleware = require('../../middleware/validation');


// Signup a new user
router.post('/', userController.create);

// Login a user
router.post('/login', userController.login);

////////////////////////////////////////////////////////

// Retrieve a user
router.get('/', middleware.isUser, userController.getAll);

// Retrieve a single user with id
router.get('/:id', middleware.isUser, userController.getById);

// Update a user by put
router.put('/:id', middleware.tokenVerify, middleware.isUser, userController.update);

// Update a user by patch
router.patch('/:id', middleware.tokenVerify, middleware.isUser, userController.update);

// Delete a user
router.delete('/:id', middleware.tokenVerify, middleware.isUser, userController.delete);

////////////////////////////////////////////////////////

// Secret Routes
router.get('/verify', middleware.tokenVerify, (req, res, next) => {
    console.log("Token Verification");
});

////////////////////////////////////////////////////////

// isDeleted users getAll :
router.get('/admin/deletedUsers', middleware.tokenVerify, middleware.isAdmin, userController.deletedUsers);

// isDeleted posts getAll :
router.get('/admin/deletedPosts', middleware.tokenVerify, middleware.isAdmin, userController.deletedPosts);

/////////////////////////////////////////////////////////

// Show User List:
router.get('/v1/usersOnly', middleware.tokenVerify, middleware.isAdmin, userController.showUsersList);

////////////////////////////////////////////////////////

// Admin Access
// Show all post: through Admin Access
router.get('/admin/getAll', middleware.tokenVerify, middleware.isAdmin, userController.adminAccess);

// Show post ById: through Admin Access
router.get('/admin/:id', middleware.tokenVerify, middleware.isAdmin, userController.adminGetById);

// Update post: through Admin Access
router.put('/adminUpdate/:id', middleware.tokenVerify, middleware.isAdmin, userController.adminPostUpdate);

// Delete post ById: through Admin Access
router.delete('/adminDelete/:id', middleware.tokenVerify, middleware.isAdmin, userController.adminPostDelete);

///////////////////////////////////////////////////////


module.exports = router; 
