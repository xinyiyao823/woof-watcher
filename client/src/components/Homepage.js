import React, { useState } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import SitterList from './SitterList'

function Homepage({user, setUser}) {


    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            <SearchBar />
            <button>View My Appointments</button>
            <SitterList />
            {/* <DropDown /> */}
        </div>
    )
}

export default Homepage
