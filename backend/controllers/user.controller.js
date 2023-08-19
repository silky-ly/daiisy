const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const UserVerification = require('../models/verification.model');
const { v4: uuidv4 } = require('uuid');
const { AUTH_EMAIL, AUTH_PASSWORD } = require('../config');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: AUTH_EMAIL,
		password: AUTH_PASSWORD,
	},
});

transporter.verify((success) => {
	try {
		console.log(success);
	} catch (error) {
		console.log(error);
	}
});

const sendVerificationEmail = ({ _id, email }, res) => {
	const url = 'http://localhost:5000/';

	const unio = uuidv4() + _id;

	const mailOptions = {
		from: AUTH_EMAIL,
		to: email,
		subject: 'verify email',
		text: 'verify. This email expires in 6 hours',
		html: `<p>This link expires in 6 hours</p><a href=${
			url + '/user/verify' + _id + '/' + unio
		}></a>`,
	};

	bcrypt
		.hash(unio, 10)
		.then(async (hashed) => {
			const newVerification = await UserVerification.create({
				userId: _id,
				uniqueId: hashed,
				expiryAt: Date.now() + 21600000,
			});

			if (newVerification) {
				transporter.sendMail(mailOptions);
				res.status(200).json({
					status: 'pending',
				});
			} else {
				res.status(400);
				throw new Error('verification email failed');
			}
		})
		.catch(() => {
			res.json({
				status: 'failed',
			});
		});
};

const verifyUser = asyncHandler(async (req, res) => {
	const { userId, unio } = req?.params;

	let isExists = await UserVerification.find({ userId });
 
	console.log('EXISTS::: ', isExists);

	if (isExists) {
		console.log('an error occured');
	}

	const { expiryAt } = isExists[0];
	

	try {
		if (expiryAt < Date.now()) {
			UserVerification.deleteOne({ _id: userId });
		}
	} catch (error) {
		res.status(400).json('error');
	}

	res.status(200).json('success');
});

const registerUser = asyncHandler(async (req, res) => {
	const { firstname, lastname, email, password } = req.body;

	if (!firstname || !lastname || !email || !password) {
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
		firstname,
		lastname,
		email,
		password: hashPassword,
		verified: false,
	});

	if (user) {
		let result = {
			_id: user.id,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			token: generateToken(user._id),
		};

		sendVerificationEmail(result, res);

		// res.status(201).json({
		// 	_id: user.id,
		// 	firstname: user.firstname,
		// 	lastname: user.lastname,
		// 	email: user.email,
		// 	token: generateToken(user._id),
		// });
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
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		throw new Error('invalid credentials');
	}
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT, { expiresIn: '30d' });
};

const getUser = async (req, res) => {
	res.status(200).json(req.user);

	// res.json({ message: 'get user' });
};

module.exports = {
	verifyUser,
	registerUser,
	loginUser,
	getUser,
};
