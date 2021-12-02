import React from 'react'
import Appointment from './Appointment'
import styled from 'styled-components'


function AppointmentList({user, appointment, setAppointments}) {

    const handleDeleteAppt = (selectedAppt) => {
        fetch(`/appointments/${selectedAppt.id}`, { 
          method: 'DELETE'
        })
     
        let remainingAppointments = (appointment) => appointment.filter(appt => appt.id !== selectedAppt.id)
        setAppointments(remainingAppointments)
        window.location.reload()
      }

    console.log(user.appointments)
    return (
        <div>
            <Header>{user.name}'s Appointments</Header>
            {user.appointments.map(appointment => <Appointment appointment={appointment} handleDeleteAppt={handleDeleteAppt} />)}
        </div>
    )
}

export default AppointmentList

const Header = styled.h1`
  font-family: 'Fuzzy Bubbles', cursive;
`
