import React from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchBar() {
    return (
        <div>
            <input
            placeholder="Look for dog-sitters..."

            />
            <button><BsSearch /></button>
        </div>
    )
}

export default SearchBar
