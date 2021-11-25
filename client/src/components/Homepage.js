import React from 'react'
import Navbar from './Navbar'

function Homepage({user, setUser}) {
    return (
        <div>
            <h1>HOMEPAGE</h1>
            <Navbar user={user} setUser={setUser}/>
        </div>
    )
}

export default Homepage
