import React from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom";


function LoginNavbar({showLogin, setShowLogin}) {
    const navigate = useNavigate()

    return (
        <Nav>
            <Button 
            onClick={() => setShowLogin(!showLogin)}
            >Login </Button>
            <Button 
            onClick={() => navigate('/signup')}
            >Sign Up</Button>
        </Nav>
    )
}

export default LoginNavbar

const Nav = styled.div`
    background-color: maroon;
    display: flex;
`

const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-color: white;
    padding: 10px;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    font-size: 15px;
`
