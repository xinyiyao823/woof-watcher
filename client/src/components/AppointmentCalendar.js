import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function AppointmentCalendar({date, onChange}) {
    

    return (
        <div>
            <Calendar 
                calendarType="US"
                onChange={onChange}
                value={date}
                
            />
            {console.log(moment(date).format("YYYY-MM-DD HH:mm:ss"))}
        </div>
    )
}

export default AppointmentCalendar
