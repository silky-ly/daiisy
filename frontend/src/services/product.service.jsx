import axios from 'axios';

const url = '/api/v1/products';
const url2 = '/api/v1/product';

const getAllProducts = async () => {
	const { data } = await axios.get(url);

	return data;
};

const getProductDetails = async (productId) => {
	const { data } = await axios.get(`${url2}/${productId}`);

	return data;
};

const productService = {
	getAllProducts,
	getProductDetails,
};

export default productService;
