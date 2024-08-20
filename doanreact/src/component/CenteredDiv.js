import React, { useState } from 'react';
import './CenteredDiv.css';
import SearchInput from './SearchInput';

// Danh sách phim
const movies = [
    {
        id: 1,
        Image1: "/image/picture1.jpg",
        Image2: "/image/background.jpg",
        title: "Interstellar",
        description: {
            title: "Mankind was born on Earth. It was never meant to die here.",
            description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
        },
        type: {
            title: "Adventure, Drama, Science Fiction",
            description: "Legendary Pictures, Syncopy, Lynda Obst Productions"
        },
        originalRelease: {
            title: "Original Release:",
            description: "2014-11-15"
        },
        runtime: {
            title: "Runtime:",
            description: "169 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$165,000,000"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.439"
        }
    },
    {
        id: 2,
        Image1: "/image/picture2.jpg",
        Image2: "/image/background2.jpg",
        title: "Inception",
        description: {
            title: "Your mind is the scene of the crime.",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious is given the inverse task of planting an idea into the mind of a CEO."
        },
        type: {
            title: "Action, Adventure, Science Fiction",
            description: "Warner Bros., Syncopy"
        },
        originalRelease: {
            title: "Original Release:",
            description: "2010-07-16"
        },
        runtime: {
            title: "Runtime:",
            description: "148 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$829,895,144"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.8"
        }
    },
    {
        id: 3,
        Image1: "/image/picture3.jpg",
        Image2: "/image/background3.jpg",
        title: "The Dark Knight",
        description: {
            title: "Why so serious?",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to embark on a quest to stop him."
        },
        type: {
            title: "Action, Crime, Drama",
            description: "Warner Bros., Legendary Pictures"
        },
        originalRelease: {
            title: "Original Release:",
            description: "2008-07-18"
        },
        runtime: {
            title: "Runtime:",
            description: "152 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$1,005,456,031"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "9.0"
        }
    },
    {
        id: 4,
        Image1: "/image/picture4.jpg",
        Image2: "/image/background4.jpg",
        title: "The Matrix",
        description: {
            title: "Welcome to the real world.",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        },
        type: {
            title: "Action, Sci-Fi",
            description: "Warner Bros., Village Roadshow Pictures"
        },
        originalRelease: {
            title: "Original Release:",
            description: "1999-03-31"
        },
        runtime: {
            title: "Runtime:",
            description: "136 min"
        },
        boxOffice: {
            title: "Box Office:",
            description: "$465,343,787"
        },
        voteAverage: {
            title: "Vote Average:",
            description: "8.7"
        }
    }
    // Thêm các đối tượng phim khác vào đây
];

const CenteredDiv = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Hàm xử lý khi chọn phim từ gợi ý
    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    // Thiết lập hình nền dựa trên phim được chọn
    const backgroundImage = selectedMovie?.Image2 ? `url(${selectedMovie.Image2})` : '/image/background.jpg';

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
                            <SearchInput movies={movies} onSelectMovie={handleSelectMovie} />
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
                        src={movie.Image1}
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
                            title={movie.description.title}
                            text={movie.description.description}
                            titleColor="#00FC87"
                            textColor="#FFFFFF"
                        />
                        <div>
                            <TitleandText
                                title={movie.type.title}
                                text={movie.type.description}
                                titleColor="#00FC87"
                                textColor="#FFFFFF"
                            />
                            <div className='grid grid-cols-2 gap-4'>
                                <TitleandText
                                    title={movie.originalRelease.title}
                                    text={movie.originalRelease.description}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title={movie.runtime.title}
                                    text={movie.runtime.description}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title={movie.boxOffice.title}
                                    text={movie.boxOffice.description}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title={movie.voteAverage.title}
                                    text={movie.voteAverage.description}
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
