import React from 'react'
import Appointment from './Appointment'

function AppointmentList({user, appointment}) {
    console.log(user.appointments)
    return (
        <div>
            <h1>{user.name}'s Appointments</h1>
            {user.appointments.map(appointment => <Appointment appointment={appointment} />)}
        </div>
    )
}

export default AppointmentList
