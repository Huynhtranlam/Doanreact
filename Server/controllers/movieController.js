// controllers/movieController.js
const { addMovie, searchMovies, getMovieById, destroyMovie } = require('../services/movieService');

const getMovieByIdController = async (req, res) => {
    try {
        const movie = await getMovieById(req.params.id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving movie', error });
    }
};

const searchMoviesController = async (req, res) => {
    try {
        const movies = await searchMovies(req.query.query);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Error searching movies', error });
    }
};
const addMovieController = async (req, res) => {
    try {
        // Lấy dữ liệu từ request body
        const movieData = req.body;

        // Gọi service để thêm phim
        const newMovie = await addMovie(movieData);

        // Trả về phản hồi thành công
        res.status(201).json(newMovie);
    } catch (error) {
        console.error('Error adding movie:', error);
        res.status(501).json({ message: 'Internal server error' });
    }
};
const deleteMovieController = async (req, res) => {
    try {
        const movieId = req.params.id;

        // Gọi service để xóa phim
        const deletedCount = await destroyMovie(movieId);

        if (deletedCount === 0) {
            // Không tìm thấy phim để xóa
            return res.status(404).json({ message: `Movie with id ${movieId} not found` });
        }

        // Phim đã xóa thành công
        res.json({ message: `Movie with id ${movieId} was deleted` });
    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).json({ message: 'Error deleting movie', error });
    }
};



module.exports = {
    getMovieByIdController,
    searchMoviesController,
    addMovieController,
    deleteMovieController
};
