// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Đăng ký người dùng
router.post('/register', register);

// Đăng nhập người dùng
router.post('/login', login);

module.exports = router;
