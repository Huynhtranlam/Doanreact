import React, { useState, useRef, useEffect } from 'react';

const SearchInput = ({ onSearch, onSelectMovie }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const suggestionsRef = useRef(null); // Tạo ref để theo dõi phần tử gợi ý

    // Hàm xử lý khi nhập liệu vào ô tìm kiếm
    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            try {
                const movies = await onSearch(value);

                if (Array.isArray(movies)) {
                    const filteredSuggestions = movies.filter(movie =>
                        movie.original_title.toLowerCase().includes(value.toLowerCase())
                    );
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

    // Hàm xử lý khi chọn gợi ý
    const handleSuggestionClick = (movie) => {
        setSearchTerm(movie.original_title);
        setSuggestions([]);
        onSelectMovie(movie); // Gửi phim đã chọn lên component cha
    };

    // Hàm xử lý khi nhấp ra ngoài phần tử gợi ý
    const handleClickOutside = (event) => {
        if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };

    useEffect(() => {
        // Thêm sự kiện click ra ngoài
        document.addEventListener('mousedown', handleClickOutside);

        // Xóa sự kiện khi component unmount
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
                onChange={handleSearchChange}
            />
            {suggestions.length > 0 && (
                <div
                    ref={suggestionsRef} // Gán ref cho phần tử gợi ý
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
