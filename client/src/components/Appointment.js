import React from 'react'
import styled from 'styled-components'

function Appointment({ appointment, handleDeleteAppt}) {

    const handleClick = () => {
        handleDeleteAppt(appointment)
    }

    return (
        <ApptDiv>
            <h3>Date: {appointment.date}</h3>
            <h3>Dog-Sitter: {appointment.sitter.name}</h3>
            
            <Button onClick={handleClick}>Cancel</Button>
        </ApptDiv>
    )
}

export default Appointment

const ApptDiv = styled.div`
    border: 1px solid;
    margin: 20px;
    width: 500px;
    font-family: 'Fuzzy Bubbles', cursive;
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
