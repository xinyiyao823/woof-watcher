import React from 'react'
import Appointment from './Appointment'

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
            <h1>{user.name}'s Appointments</h1>
            {user.appointments.map(appointment => <Appointment appointment={appointment} handleDeleteAppt={handleDeleteAppt} />)}
        </div>
    )
}

export default AppointmentList
