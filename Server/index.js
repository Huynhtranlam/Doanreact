const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./data/model'); // Import sequelize từ data.js

const app = express();
const port = 4000;

// Đồng bộ hóa cơ sở dữ liệu
sequelize.sync({ alter: true })  // Update existing tables to match the models
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });

app.use(cors());
app.use(express.json());

// Sử dụng các routes
app.use('/', movieRoutes);
app.use('/api/auth', authRoutes);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
