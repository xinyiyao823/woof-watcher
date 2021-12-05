import React, { useState } from 'react'
import AppointmentCalendar from './AppointmentCalendar'
import styled from 'styled-components';

import { parseISO } from 'date-fns'
import Moment from 'moment';


function Modal({ sitter_id, modal, setModal, user, setUser, setAppointments, startDate, setStartDate,}) {
  
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const handleSubmit = (e) => {
      e.preventDefault()
     console.log(startDate)
      fetch('/appointments', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              user_id: user.id,
              sitter_id: sitter_id,
              date: startDate
          })
      })
      .then(r => r.json())
      .then(appointment => setUser(user => {
          return ({
          ...user, 
          appointments: [...user.appointments, appointment]
          })
      }))
      setModal(false)
  }

  return (
    <div className="modalBackground" >
      <div>
      <div onClick={toggleModal} className="overlay"></div>
        <div
        className="modal-content"
        onSubmit={handleSubmit}
        
        >
          <div className="titleCloseBtn">
            <button onClick={() => {setModal(false)}}>X</button>
          </div>
          <div className="container">
            <div className="title">
              <P>Please choose a time and date.</P>
            </div>
            <div className="body">
              <AppointmentCalendar
              startDate={startDate}
              setStartDate={setStartDate}
              />
            </div>
          </div>
          <div className="modal-buttons">
            <div className="cancel">
              <Button
                onClick={() => {setModal(false);
                }}
                style={{background: 'red'}}
                id="cancelBtn"
              >Cancel</Button>
              </div>
              <div className="create">
              <Button 
              type="submit"
              style={{background: 'green'}}
              onClick={handleSubmit}
              >Create</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

const Button = styled.button`
    padding: 5px;
    border-radius: 30px;
    border: none;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    text-align: center
`

const P = styled.p`
font-size: 15px;
`