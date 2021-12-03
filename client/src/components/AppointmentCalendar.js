import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


// function AppointmentCalendar({date, onChange}) {
//     // console.log(date.toLocaleDateString())
//     // const apptDate = date.toLocaleString()
//     return (
//         <div>
//             <Calendar 
//                 calendarType="US"
//                 onChange={onChange}
//                 value={date}
                
//             />

//         </div>
//     )
// }

// export default AppointmentCalendar

const AppointmentCalendar = ({startDate, setStartDate}) => {
    
    const filterPassedTime = (time) => {
      const currentDate = new Date();
      const selectedDate = new Date(time);
  
      return currentDate.getTime() < selectedDate.getTime();
    };
    
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yyyy"
        showTimeSelect
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm"
      />
    );
  };

  export default AppointmentCalendar