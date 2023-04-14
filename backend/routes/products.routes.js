const express = require('express');

const router = express.Router();

const { getProducts, getProductsById } = require('../controllers/product.controller');


router.get('/products', getProducts)

router.get('/product/:id', getProductsById)

module.exports = router;