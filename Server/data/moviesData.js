// models/Movie.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Movie = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    adult: DataTypes.BOOLEAN,
    backdrop_path: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    homepage: DataTypes.STRING,
    origin_country: DataTypes.STRING,
    original_language: DataTypes.STRING,
    original_title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    poster_path: DataTypes.STRING,
    release_date: DataTypes.STRING,
    runtime: DataTypes.INTEGER,
    status: DataTypes.STRING,
    tagline: DataTypes.STRING,
    title: DataTypes.STRING,
    vote_average: DataTypes.FLOAT
}, {
    timestamps: false // Disable timestamps (createdAt, updatedAt)
});

module.exports = Movie;
