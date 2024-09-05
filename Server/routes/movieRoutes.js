// src/routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const { getMovieByIdController, searchMoviesController, addMovieController, deleteMovieController } = require('../controllers/movieController');

router.get('/movie/:id', getMovieByIdController);
router.get('/search/movie', searchMoviesController);
router.post('/movies', addMovieController);
router.delete('/movies/:id', deleteMovieController);

module.exports = router;
