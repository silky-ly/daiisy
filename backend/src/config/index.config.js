require('dotenv').config();

module.exports = {
	BASE_URL: process.env.BASE_URL || 'http://localhost:5000',
	AUTH_EMAIL: process.env.AUTH_EMAIL || '',
	AUTH_PASSWORD: process.env.AUTH_PASSWORD || '',
};
