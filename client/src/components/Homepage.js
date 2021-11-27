import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import SitterList from './SitterList'

function Homepage({user, setUser}) {

    const [sitters, showSitters] = useState([])

    useEffect(() => {
        fetch("/sitters")
        .then(r => r.json())
        .then(data => showSitters(data))
    }, [])
    


    return (
        <div>
            
            <Navbar user={user} setUser={setUser}/>
            <SearchBar />
            <button>View My Appointments</button>
            <SitterList sitters={sitters} />
            {/* <DropDown /> */}
        </div>
    )
}

export default Homepage
