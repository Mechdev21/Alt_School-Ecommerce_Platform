const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const adminRoutes = require('./admin');



router.use('/auth/user', userRoutes);
router.use('/auth/admin', adminRoutes);


module.exports = router;