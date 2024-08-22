// src/api.js
import axios from 'axios';
import ABC from './constants';
export const fetchMovies = async (searchTerm) => {
    try {
        const response = await axios.get(`${ABC.API_URL.BASE}${ABC.API_URL.PATH.SEARCH}`, {
            params: {
                api_key: '6ae08de6558b83f74a20051b21111e03',
                query: searchTerm,
                page: 1,
                include_adult: false
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return [];
    }
};
export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${ABC.API_URL.BASE}${ABC.API_URL.PATH.MOVIE}/${movieId}`, {
            params: {
                api_key: '6ae08de6558b83f74a20051b21111e03'
            }
        });
        return response.data; // Trả về dữ liệu chi tiết phim
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};
