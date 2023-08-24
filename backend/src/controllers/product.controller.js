const asyncHandler = require('express-async-handler');
const Product = require('../models/product.model');

const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

const getProductsById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(400);
		throw new Error('Product not found');
	}

	res.json(product);
});

module.exports = {
	getProducts,
	getProductsById,
};
