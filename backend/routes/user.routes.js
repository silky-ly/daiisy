const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const {
	registerUser,
	getUser,
	loginUser,
	verifyUser,
	verifyPageRoute,
} = require('../controllers/user.controller');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verified', verifyPageRoute);
router.get('/verify/:userId/:unio', verifyUser);
router.get('/me', protect, getUser);

module.exports = router;
