import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import SitterList from './SitterList'

function Homepage({user, setUser}) {

    const [sitters, showSitters] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("/sitters")
        .then(r => r.json())
        .then(data => showSitters(data))
    }, [])
    

    const searchedSitters = sitters.filter(sitter => {
        return sitter.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            
            <Navbar user={user} setUser={setUser}/>
            <SearchBar search={search} setSearch={setSearch}/>
            <button>View My Appointments</button>
            <SitterList sitters={sitters} searchedSitters={searchedSitters}/>
            {/* <DropDown /> */}
        </div>
    )
}

export default Homepage
