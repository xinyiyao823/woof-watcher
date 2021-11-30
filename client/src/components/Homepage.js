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

    const sitterRates = sitters.map(sitter => {
        return sitter.hourly_rate
    })

    return (
        <div>
            
            <Navbar user={user} setUser={setUser}/>
            <SearchBar search={search} setSearch={setSearch}/>
            <button>View My Appointments</button>
            <DropDown sitterRates={sitterRates} />
            <SitterList sitters={sitters} searchedSitters={searchedSitters}/>
            
        </div>
    )
}

export default Homepage
