import React, { useState } from 'react';

const SearchInput = ({ onSearch, onSelectMovie }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Hàm xử lý khi nhập liệu vào ô tìm kiếm
    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            try {
                // Gọi hàm tìm kiếm để lấy gợi ý
                const movies = await onSearch(value);

                // Kiểm tra dữ liệu để đảm bảo nó là một mảng
                if (Array.isArray(movies)) {
                    // Lọc danh sách phim dựa trên từ khóa tìm kiếm
                    const filteredSuggestions = movies.filter(movie =>
                        movie.original_title.toLowerCase().includes(value.toLowerCase())
                    );
                    setSuggestions(filteredSuggestions);
                } else {
                    // Nếu không phải mảng, xóa danh sách gợi ý
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

    // Hàm xử lý khi chọn gợi ý
    const handleSuggestionClick = (movie) => {
        setSearchTerm(movie.original_title);
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
                            {movie.original_title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchInput;
