const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const {
	registerUser,
	getUser,
	loginUser,
} = require('../controllers/user.controller');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUser);

module.exports = router;
