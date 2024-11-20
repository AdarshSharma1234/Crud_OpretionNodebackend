const express = require('express');
const { register, login } = require('../controller/authController');
const User = require('../model/User.Model');

const router = express.Router();

const { protect } = require('../authMiddleware');

router.get('/profile', protect, async (req, res) => {
const user = await User.findById(req.user.userId);
res.json(user);
});

router.post('/register', register);
router.post('/login', login);

module.exports = router;