const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts, deleteProduct, getOneProduct , updateProduct} =  require('../controller/product.controller');

router.post('/', createProduct); 
router.get('/', getAllProducts);
router.post('/id', updateProduct);
router.get('/id', deleteProduct);
router.get('/id', getOneProduct);

module.exports = router;