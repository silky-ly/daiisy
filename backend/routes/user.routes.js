const express = require('express');
const { registerUser, getUser, loginrUser } = require('../controllers/user.controller');
const router = express.Router()

router.post('/register', registerUser);
router.post('/login', loginrUser);
router.get('/me', getUser);

module.exports = router