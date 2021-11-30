import React from 'react'
import Sitter from './Sitter'
// import styled from 'styled-components'

function SitterList({sitters, searchedSitters}) {
    return (
        <div>
            {searchedSitters.map(sitter => <Sitter name={sitter.name} hourly_rate={sitter.hourly_rate} location={sitter.location} />)}
        </div>
    )
}

export default SitterList

// const SitterDiv = styled.div`
//     display: flex;
// `
