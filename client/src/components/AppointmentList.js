import React from 'react'
import Appointment from './Appointment'
import styled from 'styled-components'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function AppointmentList({user, appointment, setAppointments}) {


    const navigate = useNavigate()
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
            <Button onClick={() => navigate('/home')}><BiArrowBack /></Button>
            <Header>{user.name}'s Appointments</Header>
            {user.appointments.map(appointment => <Appointment appointment={appointment} handleDeleteAppt={handleDeleteAppt} />)}
        </div>
    )
}

export default AppointmentList

const Header = styled.h1`
  font-family: 'Fuzzy Bubbles', cursive;
`
const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-color: white;
    padding: 10px;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    font-size: 15px;
`