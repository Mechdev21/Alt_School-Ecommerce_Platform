const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserProfile, forgotPassword,  resetPassword } = require('../controller/user.auth.controller');
const joiValidator  = require('../middleware/validator.middleware');
const { authenticate } = require('../middleware/user.auth');
const { userRegSchema, loginSchema, userUpdateSchema, forgotPasswordSchema, resetPasswordSchema } = require('../joiSchema/user.schema');

router.post('/register', joiValidator(userRegSchema), registerUser);
router.post('/login', joiValidator(loginSchema), loginUser);

router.post('/forgot-password', joiValidator(forgotPasswordSchema),  forgotPassword);
router.post('/reset-password/:token', joiValidator(resetPasswordSchema), resetPassword);

router.get('/profile', authenticate, getUserProfile);
router.put('/profile/update', authenticate, joiValidator(userUpdateSchema), updateUserProfile);
router.delete('/profile/delete', authenticate, deleteUserProfile);






module.exports = router;