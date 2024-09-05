// src/components/SearchInput.js
import React, { useState, useRef, useEffect } from 'react';
import { fetchMovies } from '../api.js';

const SearchInput = ({ onSelectMovie }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const suggestionsRef = useRef(null);

    // Hàm xử lý thay đổi từ khóa tìm kiếm
    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            try {

                const movies = await fetchMovies(value);

                console.log('Fetched Movies:', movies); // Kiểm tra dữ liệu trả về

                if (movies) {
                    // Lọc gợi ý dựa trên tiêu đề phim
                    const filteredSuggestions = movies.filter(movie =>
                        movie.original_title.toLowerCase().includes(value.toLowerCase())
                    );

                    console.log('Filtered Suggestions:', filteredSuggestions); // Kiểm tra gợi ý
                    setSuggestions(filteredSuggestions);
                } else {
                    setSuggestions([]);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    // Hàm xử lý khi người dùng chọn một gợi ý phim
    const handleSuggestionClick = (movie) => {
        setSearchTerm(movie.original_title);
        setSuggestions([]);
        onSelectMovie(movie);
    };

    // Hàm xử lý khi nhấp ra ngoài phần tử chứa danh sách gợi ý
    const handleClickOutside = (event) => {
        if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-30 text-base text-black mt-10">
            <input
                type="text"
                value={searchTerm}
                placeholder="Keyword"
                className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"
                onChange={handleSearchChange} // Gọi handleSearchChange khi giá trị ô tìm kiếm thay đổi
            />
            {suggestions.length > 0 && (
                <div
                    ref={suggestionsRef}
                    className="text-left absolute top-12 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"
                >
                    {suggestions.map(movie => (
                        <div
                            key={movie.id}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSuggestionClick(movie)}
                        >
                            {movie.original_title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchInput;
