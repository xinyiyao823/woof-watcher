import React from 'react'
import Sitter from './Sitter'
// import styled from 'styled-components'

function SitterList({searchedSitters, user, appointment, setAppointments}) {
    return (
        <div>
            {searchedSitters.map(sitter => <Sitter sitter_id={sitter.id} name={sitter.name} hourly_rate={sitter.hourly_rate} location={sitter.location} user={user} appointment={appointment} setAppointments={setAppointments}/>)}
        </div>
    )
}

export default SitterList

// const SitterDiv = styled.div`
//     display: flex;
// `
