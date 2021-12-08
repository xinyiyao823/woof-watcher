import React, { useEffect } from 'react'
import Appointment from '../appointments/Appointment'
import styled from 'styled-components'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function AppointmentList({user, setUser, startDate, setStartDate}) {

    const navigate = useNavigate()

    useEffect(() => {
      fetch(`/users/${user.id}`)
      .then(r => r.json())
      .then(appointments => setUser(appointments))
    }, [])

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
    console.log(user)


    return (
        <Div>
            <Button onClick={() => navigate('/home')}><BiArrowBack size={25}/></Button>
            <Header>{user.name}'s Appointments</Header>
            {user.appointments.map(appointment => <Appointment appointment={appointment} handleDeleteAppt={handleDeleteAppt} startDate={startDate} setStartDate={setStartDate}/>)}
        </Div>
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
    padding: 5px 5px 5px 5px;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    font-size: 15px;
    background-color: #DAA49A;
`
const Div = styled.div`
  margin-left: 10px;
`