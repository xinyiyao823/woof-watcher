import React from 'react'
import Appointment from './Appointment'

function AppointmentList({user, appointment}) {
    console.log(user.appointments)
    return (
        <div>
            <h3>{user.name}'s Appointments</h3>
            {user.appointments.map(appointment => <Appointment appointment={appointment} />)}
        </div>
    )
}

export default AppointmentList
