import React, { useState } from 'react';

const SearchInput = ({ movies, onSelectMovie }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Hàm xử lý khi nhập liệu vào ô tìm kiếm
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Lọc gợi ý dựa trên từ khóa tìm kiếm
        if (value) {
            const filteredSuggestions = movies.filter(movie =>
                movie.title.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Hàm xử lý khi chọn gợi ý
    const handleSuggestionClick = (movie) => {
        setSearchTerm(movie.title);
        setSuggestions([]);
        onSelectMovie(movie); // Gửi phim đã chọn lên component cha
    };

    return (
        <div className="relative z-30 text-base text-black mt-10">
            <input
                type="text"
                value={searchTerm}
                placeholder="Keyword"
                className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"
                onChange={handleSearchChange}
            />
            {suggestions.length > 0 && (
                <div className="text-left absolute top-12 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto">
                    {suggestions.map(movie => (
                        <div
                            key={movie.id}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSuggestionClick(movie)}
                        >
                            {movie.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchInput;