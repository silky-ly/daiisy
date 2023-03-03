const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('please fill all fields.');
	}

	const exists = await User.findOne({ email });

	if (exists) {
		res.status(400);
		throw new Error('user exists.');
	}

	// hash password.
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);

	const user = User.create({
		name,
		email,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
		});
	} else {
		throw new Error('invalid user details');
	}
};

const loginrUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
		});
	} else {
		throw new Error('invalid credentials');
	}
	res.json({ message: 'user login' });
};

const getUser = async (req, res) => {
	res.json({ message: 'get user' });
};

module.exports = {
	registerUser,
	loginrUser,
	getUser,
};
