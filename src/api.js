// src/api.js
import axios from 'axios';

export const fetchMovies = async (searchTerm) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: '6ae08de6558b83f74a20051b21111e03',  // Thay thế bằng API key của bạn
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
