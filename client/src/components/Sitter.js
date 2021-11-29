import React from 'react'
import styled from 'styled-components'

function Sitter({name, hourly_rate, location}) {
    return (
        <SitterDiv>
            <h2>{name}</h2>
            <h3>Hourly Rate: ${hourly_rate}</h3>
            <h3>Location: {location}</h3>
            <button>Book Appointment 🐾</button>
        </SitterDiv>
    )
}

export default Sitter

const SitterDiv = styled.div`
    border: 2px solid;
    width: 15%;
    margin: 20px;
    display: inline-block;
    float: left;
`
