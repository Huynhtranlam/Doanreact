const { Movie } = require('../data/model'); // Import đúng model từ Sequelize
const { Op } = require('sequelize'); // Import Op để sử dụng các toán tử trong Sequelize

// Lấy tất cả các phim
const getMoviesData = async () => {
    try {
        const movies = await Movie.findAll();
        return movies;
    } catch (error) {
        return [];
    }
};

// Tìm kiếm phim theo từ khóa
const searchMovies = async (searchTerm) => {
    try {
        const movies = await Movie.findAll({
            where: {
                original_title: {
                    [Op.like]: `%${searchTerm}%`
                }
            }
        });
        return movies;
    } catch (error) {

        throw error;
    }
};

// Lấy phim theo ID
const getMovieById = async (id) => {
    try {
        const movie = await Movie.findByPk(parseInt(id));
        return movie;
    } catch (error) {

        throw error;  // or handle the error appropriately
    }
};
const addMovie = async (movieData) => {
    try {
        // Giả sử bạn đang sử dụng Sequelize
        const newMovie = await Movie.create(movieData);
        return newMovie;
    } catch (error) {
        throw new Error('Failed to add movie');
    }
};
const destroyMovie = async (id) => {
    // Xóa phim dựa trên `id`
    const deletedCount = await Movie.destroy({
        where: { id }
    });
    return deletedCount;
};
module.exports = {
    getMoviesData,
    addMovie,
    searchMovies,
    getMovieById,
    destroyMovie
};
