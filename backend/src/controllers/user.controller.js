const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const UserVerification = require('../models/verification.model');
const { v4: uuidv4 } = require('uuid');
const { AUTH_EMAIL, AUTH_PASSWORD, BASE_URL } = require('../config');
const path = require('path');

class UserController {
	constructor() {}

	// let transporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 		user: AUTH_EMAIL,
	// 		pass: AUTH_PASSWORD,
	// 	},
	// });

	// transporter.verify((success) => {
	// 	try {
	// 		console.log(success);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });

	sendVerificationEmail = ({ _id, email }, res) => {
		const unio = uuidv4() + _id;

		const mailOptions = {
			from: AUTH_EMAIL,
			to: email,
			subject: 'verify email',
			html: `<p>This link expires in 6 hours</p><a href=${
				BASE_URL + '/api/users/verify/' + _id + '/' + unio
			}>click here to verify</a>`,
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
						message: 'verification email sent',
					});
				} else {
					res.status(400).json({
						status: 'failed',
						message: 'verification email could not be sent',
					});
				}
			})
			.catch(() => {
				res.json({
					status: 'failed',
					message: 'error occured',
				});
			});
	};

	verifyUser = asyncHandler(async (req, res) => {
		const { userId, unio } = req.params;

		UserVerification.find({ userId })
			.then((result) => {
				console.log('RESULT:::', result);

				if (result.length > 0) {
					const { expiryAt } = result[0];

					console.log('EXPIRES AT', expiryAt);

					const hashed = result[0].uniqueId;

					console.log('HASHED:::', hashed);

					if (expiryAt < Date.now()) {
						UserVerification.deleteOne({ _id: userId })
							.then((result) => {
								User.deleteOne({ userId })
									.then(() => {
										console.log(error);
										let message = 'link expired';
										res.redirect(
											`/api/user/verified/error=true&message=${message}`
										);
									})
									.catch((error) => {
										console.log(error);
										let message = 'user cleared';
										res.redirect(
											`/api/user/verified/error=true&message=${message}`
										);
									});
							})
							.catch((error) => {
								console.log(error);
								let message = 'an error occured';
								res.redirect(
									`/api/user/verified/error=true&message=${message}`
								);
							});
					} else {
						bcrypt
							.compare(unio, hashed)
							.then((result) => {
								if (result) {
									User.updateOne(
										{ _id: userId },
										{ verified: true }
									)
										.then(() => {
											UserVerification.deleteOne({
												userId,
											})
												.then(() => {
													res.sendFile(
														path.join(
															__dirname,
															'../views/verified.html'
														)
													);
												})
												.catch((error) => {
													console.log(error);
													let message =
														'an error occured while deleting user record';
													res.redirect(
														`/api/user/verified/error=true&message=${message}`
													);
												});
										})
										.catch((error) => {
											console.log(error);
											let message =
												'an error occured while updating our record';
											res.redirect(
												`/api/user/verified/error=true&message=${message}`
											);
										});
								} else {
									console.log(error);
									let message =
										'invalid verification details';
									res.redirect(
										`/api/user/verified/error=true&message=${message}`
									);
								}
							})
							.catch((error) => {
								console.log(error);
								let message =
									'an error occured while comapring strings';
								res.redirect(
									`/api/user/verified/error=true&message=${message}`
								);
							});
					}
				} else {
					let message = 'account does not exist';
					res.redirect(
						`/api/user/verified/error=true&message=${message}`
					);
				}
			})
			.catch(() => {
				console.log(error);
				let message =
					'An error occured while checking for existing user verification record.';
				res.redirect(
					`/api/user/verified/error=true&message=${message}`
				);
			});
	});

	verifyPageRoute = asyncHandler(async (req, res) => {
		res.sendFile(path.join(__dirname, '../views/verified.html'));
	});

	registerUser = asyncHandler(async (req, res) => {
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
		} else {
			res.status(400);
			throw new Error('invalid user details');
		}
	});

	loginUser = asyncHandler(async (req, res) => {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (user.length) {
			if (!user.verified) {
				res.json({
					status: 'failed. user not verified. check inbox',
				});
			}
		}

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

	generateToken = (id) => {
		return jwt.sign({ id }, process.env.JWT, { expiresIn: '30d' });
	};

	getUser = async (req, res) => {
		res.status(200).json(req.user);
	};
}

module.exports = new UserController();
