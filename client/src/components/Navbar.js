import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Navbar({user, setUser}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => setUser(null))
        navigate('/')

    }

    console.log(user)
    return (
        <Nav>
            {/* <span>Welcome, {user.name}</span> */}
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
    padding: 10px;
    font-color: white;
    font-size: 15px;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
`

