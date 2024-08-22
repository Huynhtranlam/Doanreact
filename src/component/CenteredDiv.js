import React, { useState, useEffect } from 'react';
import './CenteredDiv.css';
import SearchInput from './SearchInput';
import { fetchMovies, fetchMovieDetails } from '../api'; // Đường dẫn lên một cấp

const CenteredDiv = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Hàm xử lý khi chọn phim từ gợi ý
    const handleSelectMovie = async (movie) => {
        const movieDetails = await fetchMovieDetails(movie.id);
        setSelectedMovie(movieDetails);
        localStorage.setItem('selectedMovieId', movie.id); // Lưu ID của phim vào localStorage
    };

    // Gọi API để lấy dữ liệu phim khi tìm kiếm
    const handleSearchMovies = async (searchTerm) => {
        try {
            const data = await fetchMovies(searchTerm);
            return data;
        } catch (error) {
            console.error('Error fetching movies:', error);
            return [];
        }
    };

    // Khi component được mount, kiểm tra localStorage và tải phim dựa trên ID đã lưu
    useEffect(() => {
        const storedMovieId = localStorage.getItem('selectedMovieId');
        if (storedMovieId) {
            const fetchSelectedMovie = async () => {
                const movieDetails = await fetchMovieDetails(storedMovieId);
                setSelectedMovie(movieDetails);
            };
            fetchSelectedMovie();
        }
    }, []);

    // Thiết lập hình nền dựa trên phim được chọn
    const backgroundImage = selectedMovie?.backdrop_path
        ? `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`
        : '/image/background.jpg';

    return (
        <div className='custom-body' style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-screen h-screen custom-gradient'>
                <div className='h-screen custom-container'>
                    <div className='w-full h-32 grid grid-cols-2 gap-4 content-center'>
                        <div>
                            <img
                                src="/image/tmdb.svg"
                                alt="Logo"
                                className="w-36 h-36"
                            />
                        </div>
                        <div>
                            <SearchInput onSearch={handleSearchMovies} onSelectMovie={handleSelectMovie} />
                        </div>
                    </div>
                    {selectedMovie && <Center movie={selectedMovie} />}
                </div>
            </div>
        </div>
    );
}

function Center({ movie }) {
    console.log(movie);
    if (!movie) {
        return null; // Tránh lỗi nếu movie là null hoặc undefined
    }

    return (
        <div className='centered-div'>
            <div className='flex w-full h-full bg-black bg-opacity-80 backdrop-blur-sm'>
                <div className='w-80 h-full'>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="Description"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col p-4">
                    <h3 className='text-4xl font-sans text-left uppercase text-customGray'>
                        {movie.title}
                    </h3>
                    <div>
                        <TitleandText
                            title={movie.tagline}
                            text={movie.overview}
                            titleColor="#00FC87"
                            textColor="#FFFFFF"
                        />
                        <div>
                            <div className='grid grid-cols-2 gap-4'>
                                <TitleandText
                                    title="Release Date"
                                    text={movie.release_date}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Runtime"
                                    text={`${movie.runtime} min`}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Box Office:"
                                    text={`${movie.budget} $`}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Rating"
                                    text={`${movie.vote_average}/10 `}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Status"
                                    text={movie.status}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Country"
                                    text={movie.production_companies[0].origin_country}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TitleandText({ title, text, titleColor = '#00FC87', textColor = '#FFFFFF' }) {
    return (
        <div className='mt-4'>
            <h3
                className="text-xl font-sans text-left"
                style={{ color: titleColor }}
            >
                {title}
            </h3>
            <p className="text-base font-sans text-left" style={{ color: textColor }}>
                {text}
            </p>
        </div>
    );
}

export default CenteredDiv;
