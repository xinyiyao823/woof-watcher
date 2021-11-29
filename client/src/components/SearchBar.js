import React from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchBar({search, setSearch}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Plants:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button>{<BsSearch />}</button>
        </div>
    )
}

export default SearchBar
