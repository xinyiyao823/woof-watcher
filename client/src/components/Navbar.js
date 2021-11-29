import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
        <Nav>
            <button onClick={handleLogout}>Logout</button>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    background-color: #00968C;
`


