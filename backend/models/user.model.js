const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		firstname: {
			type: String,
			required: [true, 'firstname is required'],
		},
		lastname: {
			type: String,
			required: [true, 'lastname is required'],
		},
		email: {
			type: String,
			required: [true, 'email is required'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'password is required'],
		},
		verified: {
			type: Boolean,
		},
		isAdmin: {
			type: String,
			required: [true, 'name is required'],
			default: false,
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
