import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { GiDogHouse } from 'react-icons/gi'

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
            <div>
                <Div>
                    <GiDogHouse size={40}/>
                </Div>
                <Span>{user.name.toUpperCase()}</Span>
            </div>
            <div className="logout">
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    background-color: #AF5B5B;
    display: flex;
    justify-content: space-between;
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
    background-color: #EFD9CE;
`

const Span = styled.span`
    font-family: 'Fuzzy Bubbles', cursive;
    font-size: 20px;
    margin-left: 15px;
`

const Div = styled.div`
    margin-left: 15px;
`
// move logout button to the right 
// get "welcome, user.name to show in the nav"
