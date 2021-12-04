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
                <GiDogHouse size={50}/>
                {/* <span>Welcome, {user.name}</span> */}
            </div>
            <div className="logout">
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    background-color: maroon;
    display: flex;


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
// move logout button to the right 
// get "welcome, user.name to show in the nav"
