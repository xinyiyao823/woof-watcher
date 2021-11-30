import React, { useState } from 'react'
import Calendar from 'react-calendar'

function AppointmentCalendar() {
    const [date, setDate] = useState(new Date())

    const onChange = () => {
        setDate(date)
    }

    return (
        <div>
            <Calendar 
                calendarType="US"
                onChange={onChange}
                value={date}
            />
        </div>
    )
}

export default AppointmentCalendar
