import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from './Modal';
import { IoPaw } from 'react-icons/io5';


function Sitter({sitter_id, name, hourly_rate, location, user, appointment, setAppointments}) {
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = () => {
        setModalOpen(true)
    }

    return (
        <SitterDiv>
            <h2><strong>{name}</strong></h2>
            <h3>Rate: ${hourly_rate}/hr</h3>
            <h3>Location: {location}</h3>
            <Button onClick={handleClick}>Book Appointment <IoPaw /></Button>
            {modalOpen && <Modal sitter_id={sitter_id} modalOpen={modalOpen} setModalOpen={setModalOpen} user={user} appointment={appointment} setAppointments={setAppointments}/>}
        </SitterDiv>
    )
}

export default Sitter

const SitterDiv = styled.div`
    border: 2px solid;
    width: 15%;
    margin: 25px;
    padding: 10px;
    display: inline-block;
    float: left;
    font-family: 'Fuzzy Bubbles', cursive;
    
`
const Button = styled.button`
    margin: 15px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    font-size: 15px;
    font-color: white;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
`
