import React, { useState } from 'react'
import styled from 'styled-components'
import { parseISO } from 'date-fns'
import EditAppointment from '../EditAppointment'
import DeleteConfirmation from '../DeleteConfirmation'

function Appointment({ appointment, handleDeleteAppt, startDate, setStartDate}) {
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
    };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    const handleEdit = (e) => {
        setModal(true)
    }


    const handleClick = () => {
        //  setModal(true)
         handleDeleteAppt(appointment)
            if (!appointment) {
                console.log('appt not deleted')
            } else {
                setModal(false)
            }
    }
    

    let dateString = parseISO(appointment.date).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})

    return (
        <ApptDiv>
            <h3>Date: {dateString}</h3>
            <h3>Dog-Sitter: {appointment.sitter.name}</h3>
            {/* <Button onClick={handleEdit}>Edit</Button> */}
            <Button onClick={() => setModal(true)}>Cancel</Button>
            {/* <EditAppointment startDate={startDate} setStartDate={setStartDate}/> */}
            <DeleteConfirmation handleDeleteAppt={handleDeleteAppt} modal={modal} setModal={setModal} toggleModal={toggleModal} handleClick={handleClick}/>
        </ApptDiv>
    )
}

export default Appointment

const ApptDiv = styled.div`
    box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%);
    background-color: #F2F7F2;
    padding: 15px;
    justify-content: center;
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
    background-color: #DAA49A;
`
