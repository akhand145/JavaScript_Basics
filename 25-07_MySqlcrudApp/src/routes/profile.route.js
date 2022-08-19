const express = require('express');
const router = express.Router();

const userController = require('../controllers/profile.controller');
const middleware = require('../../middleware/validation');


// User forgotPassword:
router.put('/forgotPassword/:id', middleware.tokenVerify, middleware.isUser, userController.forgotPassword);

// User resetPassword:
router.put('/resetPassword/:id', middleware.tokenVerify, middleware.isUser, userController.resetPassword);

// User Logout:
router.get('/logout', middleware.tokenVerify, middleware.isUser, userController.logout);

// User forgotPassword with NodeMailer:
router.put('/forgotPasswordNodemailer/:id', middleware.tokenVerify, middleware.isUser, userController.forgotPasswordNodemailer);


// Secret Routes
router.get('/verify', middleware.tokenVerify, (req, res, next) => {
    console.log("Token Verification");
});


module.exports = router;

