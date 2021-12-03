import React, { useEffect } from 'react'
import Appointment from './Appointment'
import styled from 'styled-components'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function AppointmentList({user, setUser}) {

    const navigate = useNavigate()

    useEffect(() => {
      fetch(`/users/${user.id}`)
      .then(r => r.json())
      .then(appointments => setUser(appointments))
    }, [])
    console.log(user)

    const handleDeleteAppt = (selectedAppt) => {
        fetch(`/appointments/${selectedAppt.id}`, { 
          method: 'DELETE'
        })
     
       setUser(user => {
         return ({
          ...user, 
          appointments: user.appointments.filter(appt => appt.id !== selectedAppt.id)
         })
       })
    }


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