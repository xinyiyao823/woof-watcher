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
            <Button onClick={handleLogout}>Logout</Button>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    background-color: maroon;
`
const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-color: white;
    font-family: 'Fuzzy Bubbles', cursive;
`

