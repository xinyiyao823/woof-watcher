import React from 'react'
import Calendar from 'react-calendar'

function AppointmentCalendar({date, onChange}) {
    

    return (
        <div>
            <Calendar 
                calendarType="US"
                onChange={onChange}
                value={date}
            />
            {console.log(date.toString())}
        </div>
    )
}

export default AppointmentCalendar
