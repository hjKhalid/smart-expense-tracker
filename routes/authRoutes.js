const express = require('express');
const router = express.Router();
const { registerUser, authUser, getUserProfile } = require('../controller/authController');
const auth = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', auth, getUserProfile);

module.exports = router;
