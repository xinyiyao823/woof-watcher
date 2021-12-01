import React, { useState } from 'react'
import AppointmentCalendar from './AppointmentCalendar'




function Modal({ sitter_id, modalOpen, setModalOpen, user, appointment, setAppointments}) {
    const [date, setDate] = useState(new Date())

    const onChange = (date) => {
        setDate(date)
    }

    const handleClick = () => {
        setModalOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hi')
        fetch('/appointments', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user.id,
                sitter_id: sitter_id,
                date: date
            })
        })
        .then( r => r.json())
        .then(appointment => setAppointments(appointment))
    }

  return (
    <div className="modalBackground">
      <form 
      className="modalContainer"
      onSubmit={handleSubmit}
      >
        <div className="titleCloseBtn">
          <button
            onClick={() => {setModalOpen(false)}}
          >
            X
          </button>
        </div>
        <div className="title">
          
        </div>
        <div className="body">
          <AppointmentCalendar
          date={date}
          setDate={setDate}
          onChange={onChange} />
        </div>
        <div className="footer">
          <button
            onClick={() => {setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button 
          type="submit"
          >Create</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;