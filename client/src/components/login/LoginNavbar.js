import React from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom";


function LoginNavbar({showLogin, setShowLogin}) {
    const navigate = useNavigate()

    return (
        <Nav>
            <div>
                <Button onClick={() => setShowLogin(!showLogin)}>Login</Button>
            </div>
            <div>
                <Button 
                onClick={() => navigate('/signup')}
                >Sign Up</Button>
            </div>
        </Nav>
    )
}

export default LoginNavbar

const Nav = styled.div`
    background-color: #AF5B5B;
    ${'' /* background-color: #8C5F66 */}
    display: flex;
`

const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-color: white;
    padding: 8px;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    font-size: 17px;
    ${'' /* background-color: #F0E7D8; */}
    background-color: #EFD9CE;
`
