import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'

function Sitter({name, hourly_rate, location}) {
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = () => {
        setModalOpen(true)
    }

    return (
        <SitterDiv>
            <h2>{name}</h2>
            <h3>Hourly Rate: ${hourly_rate}</h3>
            <h3>Location: {location}</h3>
            <button onClick={handleClick}>Book Appointment 🐾</button>
            {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
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
