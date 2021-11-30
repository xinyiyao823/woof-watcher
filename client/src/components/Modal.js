import React from 'react'
import AppointmentCalendar from './AppointmentCalendar'
import 'react-calendar/dist/Calendar.css';



function Modal({ modalOpen, setModalOpen}) {

  const handleClick = () => {

    setModalOpen(false);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
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
          <AppointmentCalendar />
        </div>
        <div className="footer">
          <button
            onClick={() => {setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleClick}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;