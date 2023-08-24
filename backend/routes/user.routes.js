const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/verified', userController.verifyPageRoute);
router.get('/verify/:userId/:unio', userController.verifyUser);
router.get('/me', protect, userController.getUser);

module.exports = router;
