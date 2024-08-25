// src/components/Search.tsx
import React from 'react';

interface SearchProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    sortOrder: string;
    setSortOrder: (order: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) => {
    return (
        <div className="search-controls">
            <input
                type="text"
                placeholder="Search by title or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
            </select>
        </div>
    );
};

export default Search;
