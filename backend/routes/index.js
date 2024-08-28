const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const userRoutes = require('./user');
const adminRoutes = require('./admin');


router.use('/product', productRoute);
router.use('/auth/user', userRoutes);
router.use('/auth/admin', adminRoutes);


module.exports = router;