import React from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom";

function LoginNavbar({showLogin, setShowLogin}) {
    const navigate = useNavigate()
    
    return (
        <Nav>
            <button onClick={() => setShowLogin(!showLogin)}>Login</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </Nav>
    )
}

export default LoginNavbar

const Nav = styled.div`
    background-color: maroon;
    display: flex;
`
