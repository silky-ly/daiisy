const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('please fill all fields.');
	}

	const Userexists = await User.findOne({ email });

	if (Userexists) {
		res.status(400);
		throw new Error('user exists.');
	}

	// hash password.
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('invalid user details');
	}
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		throw new Error('invalid credentials');
	}
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT, {expiresIn: '30d'})
}

const getUser = async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id)

	res.status(200).json({
		id: _id,
		name,
		email,
	})

	// res.json({ message: 'get user' });
};

module.exports = {
	registerUser,
	loginUser,
	getUser,
};
