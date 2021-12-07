import React from 'react'
import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'

function SearchBar({search, setSearch}) {
    return (
        <div className="searchbar">
            <Label htmlFor="search">Search Dog-Sitters:</Label>
            <Input
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
    margin: 12px;
    padding: 8px;
    border-radius: 30px;
    border: none;
    font-color: white;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    background-color: #DAA49A;
`

const Input = styled.input`
    margin: 5px;
    padding: 10px;
    border-radius: 30px;
    border: none;
`
const Label = styled.label`
    font-family: 'Fuzzy Bubbles', cursive;
`
