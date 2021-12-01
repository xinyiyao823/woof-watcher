import React from 'react'

function Appointment({ appointment}) {
    console.log(appointment)
    return (
        <div>
            <p>Date: {appointment.date}</p>
            <p>{appointment.sitter.name}</p>
            

        </div>
    )
}

export default Appointment
