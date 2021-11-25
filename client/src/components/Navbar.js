import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({setUser}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => setUser(null))
        navigate('/')

    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar
