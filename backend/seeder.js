const mongoose = require('mongoose');
const connectDB = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv').config();
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/user.model');
const Product = require('./models/product.model');
const Order = require('./models/order.model');

connectDB();

const importData = async () => {
	try {
		await User.deleteMany();
		await Product.deleteMany();
		await Order.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = await createdUsers[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);

		console.log('Data Imported'.green.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
        process.exit(1);
	}
};


const destroyData = async () => {
	try {
		await User.deleteMany();
		await Product.deleteMany();
		await Order.deleteMany();

		console.log('Data Destroyed'.red.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
        process.exit(1);
	}
};

process.argv[2] === '-d' ? destroyData() : importData()