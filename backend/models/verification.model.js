const mongoose = require('mongoose');

const verificationSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: [true, 'firstname is required'],
		},
		uniqueId: {
			type: String,
		},
		expiryAt: {
			type: Date,
		},
		meta: {
			type: Object,
			required: false,
			default: null,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Verification', verificationSchema);
