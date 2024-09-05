// src/api.js
import axios from 'axios';
import URL from './constants';

export const fetchMovies = async (searchTerm) => {
    try {
        const response = await axios.get(`${URL.API_URL.BASE}${URL.API_URL.PATH.SEARCH}`, {
            params: {
                query: searchTerm,
                page: 1,
                include_adult: false
            }
        });

        console.log('Fetched Movies:', response.data); // Kiểm tra dữ liệu phản hồi
        return response.data || [];
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return [];
    }
};


export const fetchMovieDetails = async (movieId) => {
    try {

        const response = await axios.get(`${URL.API_URL.BASE}${URL.API_URL.PATH.MOVIE}/${movieId}`);
        return response.data; // Trả về dữ liệu chi tiết phim từ API Express.js
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};
