// config.js
const URL1 = {
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/original',
    API_URL: {
        BASE: 'https://api.themoviedb.org/3',
        PATH: {
            MOVIE: '/movie',
            SEARCH: '/search/movie'
        }
    }
};
const URL = {
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/original',
    API_URL: {
        BASE: 'http://localhost:4000',  // Trỏ tới server Express.js của bạn
        PATH: {
            SEARCH: '/search/movie',
            MOVIE: '/movie'
        }
    }
};


export default URL;
