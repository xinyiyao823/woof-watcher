import React from 'react'
import Sitter from './Sitter'
import styled from 'styled-components'

function SitterList({searchedSitters, user, setUser, appointment, setAppointments, startDate, setStartDate}) {
    
    
    return (
        <SitterListDiv>
            {searchedSitters.map(sitter => <Sitter 
            sitter_id={sitter.id} name={sitter.name} hourly_rate={sitter.hourly_rate} location={sitter.location} user={user} setUser={setUser} appointment={appointment} setAppointments={setAppointments} startDate={startDate} setStartDate={setStartDate} />)}
        </SitterListDiv>
    )
}

export default SitterList

const SitterListDiv = styled.div`
    display: flex;
    background-color: aliceblue;
    flex-wrap: wrap;

`
