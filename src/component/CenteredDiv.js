import React, { useState, useEffect } from 'react';
import './CenteredDiv.css';
import SearchInput from './SearchInput';
import { fetchMovies } from '../api'; // Đường dẫn lên một cấp

const CenteredDiv = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);


    // Hàm xử lý khi chọn phim từ gợi ý
    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    // Gọi API để lấy dữ liệu phim khi tìm kiếm
    const handleSearchMovies = async (searchTerm) => {
        const data = await fetchMovies(searchTerm);
        // Giả sử bạn chỉ lấy phim đầu tiên từ kết quả tìm kiếm
        if (data.length > 0) {
            setSelectedMovie(data[0]);
        } else {
            setSelectedMovie(null);
        }
    };
    // Thiết lập hình nền dựa trên phim được chọn
    const backgroundImage = selectedMovie?.backdrop_path ? `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})` : '/image/background.jpg';

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
                            title="Description"
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
                                    text={`${movie.vote_average} min`}
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
