import create from 'zustand';
import { persist } from 'zustand/middleware';
import { fetchMovieDetails } from '../api'; // Đường dẫn đúng đến file api của bạn

const useMovieStore = create(persist(
    (set, get) => ({
        selectedMovie: null,
        setSelectedMovie: async (movieId) => {
            const movieDetails = await fetchMovieDetails(movieId);
            set({ selectedMovie: movieDetails });
            localStorage.setItem('selectedMovieId', movieId);
        },
        initializeSelectedMovie: async () => {
            const storedMovieId = localStorage.getItem('selectedMovieId');
            if (storedMovieId) {
                await get().setSelectedMovie(storedMovieId); // Sử dụng get() để truy cập hàm setSelectedMovie
            }
        },
    }),
    {
        name: 'movie-store', // Tên key để lưu trữ trong localStorage
        getStorage: () => localStorage, // Chỉ định localStorage làm nơi lưu trữ
    }
));

export default useMovieStore;
