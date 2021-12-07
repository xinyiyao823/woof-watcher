import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from '../Modal';
import ReviewInterface from '../reviews/ReviewInterface';
import Rating from '@mui/material/Rating';
import Avatar from 'react-avatar';


function Sitter({sitter_id, name, hourly_rate, location, user, setUser, appointment, setAppointments, startDate, setStartDate,}) {
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState([]);

    const handleClick = () => {
        setModal(true)
    }

    const ratingSum = (a, b) => a + b;
    const ratingAverage = (value.length >= 1)  ? ([...value].reduce(ratingSum)) / value.length : 0
 
    return (
        <SitterDiv>
            <Avatar 
            name={name} 
            size="50" 
            round={true}    
            />
            <h2><strong>{name}</strong></h2>
            <h3>Rate: ${hourly_rate}/hr</h3>
            <h3>Location: {location}</h3>
            <Button onClick={handleClick}>Book Appointment <Span>🐾</Span>

            </Button>
            <Rating 
            name="read-only" 
            value={ratingAverage} 
            precision={0.5}
            readOnly    
            />
            <ReviewInterface sitter_id={sitter_id} user={user} value={value} setValue={setValue}/>
            {modal && <Modal sitter_id={sitter_id} modal={modal} setModal={setModal} user={user} setUser={setUser} appointment={appointment} setAppointments={setAppointments} startDate={startDate} setStartDate={setStartDate}/>}
        </SitterDiv>
    )
}

export default Sitter

const SitterDiv = styled.div`
    box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%);
    background-color: white;
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
    background-color: #DAA49A;
    border: none;
    font-size: 15px;
    font-color: white;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
`
const Span = styled.span`
    font-size: 20px;
`
