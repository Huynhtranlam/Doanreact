
// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../data/model'); // Đảm bảo User được định nghĩa đúng cách

// Đăng ký người dùng
const register = async (req, res) => {
    const { email, password, username } = req.body; // Đảm bảo rằng username được lấy từ req.body
    try {
        // Kiểm tra xem email đã tồn tại chưa
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo người dùng mới
        const newUser = await User.create({ email, username, password: hashedPassword }); // Đảm bảo rằng username được truyền vào đây

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

// Đăng nhập người dùng
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Tìm người dùng theo email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // So sánh mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Tạo token JWT
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

module.exports = { register, login };
