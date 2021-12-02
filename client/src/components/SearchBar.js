import React from 'react'
import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'

function SearchBar({search, setSearch}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Dog-Sitters: </label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button>{<BsSearch />}</Button>
        </div>
    )
}

export default SearchBar

const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-color: white;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
`
