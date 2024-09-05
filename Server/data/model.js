const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/database.sqlite',  // Path to the SQLite database file
    logging: false  // Disable logging to keep console output clean
});

// Define the Movie model
const Movie = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    original_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    overview: {
        type: DataTypes.TEXT
    },
    release_date: {
        type: DataTypes.DATEONLY
    },
    runtime: {
        type: DataTypes.INTEGER
    },
    vote_average: {
        type: DataTypes.FLOAT
    },
    tagline: {
        type: DataTypes.STRING
    },
    homepage: {
        type: DataTypes.STRING
    },
    budget: {
        type: DataTypes.INTEGER
    },
    original_language: {
        type: DataTypes.STRING
    },
    backdrop_path: {
        type: DataTypes.STRING
    },
    poster_path: {
        type: DataTypes.STRING
    },
    adult: {
        type: DataTypes.BOOLEAN
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,  // Disable timestamps if not used
    tableName: 'movies' // Specify the table name
});
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define the ProductionCompany model
const ProductionCompany = sequelize.define('ProductionCompany', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origin_country: {
        type: DataTypes.STRING
    },
    logo_path: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,  // Disable timestamps if not used
    tableName: 'production_companies' // Specify the table name
});

// Set up relationships
Movie.hasMany(ProductionCompany, {
    as: 'production_companies',
    foreignKey: 'movieId'  // Define foreign key for the association
});
ProductionCompany.belongsTo(Movie, {
    foreignKey: 'movieId'  // Define foreign key for the association
});

module.exports = { sequelize, Movie, ProductionCompany, User };
