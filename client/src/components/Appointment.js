import React from 'react'
import styled from 'styled-components'

function Appointment({ appointment}) {

    return (
        <ApptDiv>
            <p>Date: {appointment.date}</p>
            <p>Dog-Sitter: {appointment.sitter.name}</p>
            
            <Button>Cancel</Button>
        </ApptDiv>
    )
}

export default Appointment

const ApptDiv = styled.div`
    border: 1px solid;
    margin: 20px;
    width: 500px;
`

const Button = styled.button`
    background-color: transparent;
`
