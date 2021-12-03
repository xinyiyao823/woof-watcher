import React from 'react'
import Sitter from './Sitter'
import styled from 'styled-components'

function SitterList({searchedSitters, user, appointment, setAppointments}) {
    return (
        <SitterListDiv>
            {searchedSitters.map(sitter => <Sitter sitter_id={sitter.id} name={sitter.name} hourly_rate={sitter.hourly_rate} location={sitter.location} user={user} appointment={appointment} setAppointments={setAppointments}/>)}
        </SitterListDiv>
    )
}

export default SitterList

const SitterListDiv = styled.div`
    display: flex;
    background-color: aliceblue;
    
`
