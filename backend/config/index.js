require('dotenv').config();

module.exports = {
    AUTH_EMAIL : process.env.AUTH_EMAIL || '',
    AUTH_PASSWORD : process.env.AUTH_PASSWORD || '',
}