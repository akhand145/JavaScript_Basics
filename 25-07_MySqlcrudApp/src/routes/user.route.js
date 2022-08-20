const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { tokenVerify, isAdmin, isUser } = require('../../middleware/validation');


// Signup a new user
router.post('/', userController.create);

// Login a user
router.post('/login', userController.login);

////////////////////////////////////////////////////////

// Retrieve a user
router.get('/', userController.getAll);

// Retrieve a single user with id
router.get('/:id', userController.getById);

// Update a user by put
router.put('/:id', tokenVerify, userController.update);

// Update a user by patch
router.patch('/:id', tokenVerify, userController.update);

// Delete a user
router.delete('/:id', tokenVerify, userController.delete);

////////////////////////////////////////////////////////

// isDeleted users getAll :
router.get('/admin/deletedUsers', tokenVerify, userController.deletedUsers);

// isDeleted posts getAll :
router.get('/admin/deletedPosts', tokenVerify, userController.deletedPosts);

/////////////////////////////////////////////////////////

// Show User List:
router.get('/v1/usersOnly', tokenVerify, userController.showUsersList);

////////////////////////////////////////////////////////

// Admin Access
// Show all post: through Admin Access
router.get('/admin/getAll', tokenVerify, userController.adminAccess);

// Show post ById: through Admin Access
router.get('/admin/:id', tokenVerify, userController.adminGetById);

// Update post: through Admin Access
router.put('/adminUpdate/:id', tokenVerify, userController.adminPostUpdate);

// Delete post ById: through Admin Access
router.delete('/adminDelete/:id', tokenVerify, userController.adminPostDelete);

///////////////////////////////////////////////////////


module.exports = router; 
