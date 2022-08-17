const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { checkToken } = require('../../auth_middleware/token_validation');
const auth = require('../../auth_middleware/token_validation');


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
router.put('/:id', auth, userController.update);

// Update a user by patch
router.patch('/:id', auth, userController.update);

// Delete a user
router.delete('/:id', auth, userController.delete);

////////////////////////////////////////////////////////

// Secret Routes
router.get('/verify', auth, (req, res, next) => {
    console.log("Token Verification");
});

////////////////////////////////////////////////////////

// isDeleted users getAll :
router.get('/admin/deletedUsers', auth, userController.deletedUsers);

// isDeleted posts getAll :
router.get('/admin/deletedPosts', auth, userController.deletedPosts);

/////////////////////////////////////////////////////////

// Show User post:
router.get('/v1/usersOnly', auth, userController.showUsersList);

////////////////////////////////////////////////////////

// Admin Access
// Show all post: through Admin Access
router.get('/admin/getAll', auth, userController.adminAccess);

// Show post ById: through Admin Access
router.get('/admin/:id', auth, userController.adminGetById);

// Update post: through Admin Access
router.put('/adminUpdate/:id', auth, userController.adminPostUpdate);

// Delete post ById: through Admin Access
router.delete('/adminDelete/:id', auth, userController.adminPostDelete);

///////////////////////////////////////////////////////


module.exports = router; 
