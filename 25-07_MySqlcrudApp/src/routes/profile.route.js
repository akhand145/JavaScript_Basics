const express = require('express');
const router = express.Router();

const userController = require('../controllers/profile.controller');
const { tokenVerify, isAdmin, isUser } = require('../../middleware/validation');


// User forgotPassword:
router.put('/forgotPassword/:id', tokenVerify, userController.forgotPassword);

// User resetPassword:
router.put('/resetPassword/:id', tokenVerify, userController.resetPassword);

// User Logout:
router.get('/logout', tokenVerify, userController.logout);

// User forgotPassword with NodeMailer:
// router.put('/forgotPassNodemailer/:id', tokenVerify, isUser, userController.forgotPassNodemailer);

// sendEmail:
router.get('/sendEmail', tokenVerify, userController.sendEmail);

// verifyOtp:
router.post('/verifyOtp', tokenVerify, userController.verifyOtp);


module.exports = router;

