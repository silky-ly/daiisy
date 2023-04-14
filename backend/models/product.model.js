const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const productSchema = mongoose.Schema(
	{
		// user: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	required: true,
		// 	ref:'User'
		// },
        name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		narration: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		countInStock: {
			type: Number,
			required: true,
		},
		review: [reviewSchema],
		rating: {
			type: String,
			required: true,
            default: 0
		},
		numReviews: {
			type: Number,
			required: true,
            default: 0
		},

	},
	{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);