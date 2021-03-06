import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import SitterList from './sitters/SitterList'
import { useNavigate } from 'react-router-dom'
import {fetchSitters} from '../redux/sittersSlice'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'


function Homepage({user, setUser, appointment, setAppointments, startDate, setStartDate}) {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [sortPrice, setSortPrice] = useState(null);
    const navigate = useNavigate();
    

    useEffect(() => {
        dispatch(fetchSitters('/sitters'))
    }, [])

    const sitters = useSelector(state => state.sitters)
    const sitterRates = sitters.map(sitter => {
        return sitter.hourly_rate
    })

    const sortedSitters = [...sitters].sort((sitter1, sitter2) => {
        if (sortPrice === "Low") {
             return sitter1.hourly_rate - sitter2.hourly_rate;
        } 
        // return sitter2.hourly_rate - sitter1.hourly_rate;
        // }
    }) 

    const searchedSitters = sortedSitters.filter(sitter => {
        return sitter.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(user)
    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            
            <SearchBar search={search} setSearch={setSearch}/>
            <DropDown sitterRates={sitterRates} sortPrice={sortPrice} setSortPrice={setSortPrice} />
            <Button onClick={() => navigate('/appointments')}>View My Appointments</Button>
            <SitterList sitters={sitters} searchedSitters={searchedSitters} sortedSitters={sortedSitters} user={user} setUser={setUser} appointment={appointment} setAppointments={setAppointments} startDate={startDate} setStartDate={setStartDate}/>    
        </div>
    )
}

export default Homepage

const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    padding: 10px;
    border: none;
    font-color: white;
    font-size: 15px;
    font-family: 'Fuzzy Bubbles', cursive;
    cursor: pointer;
    ${'' /* background-color: #F0E7D8; */}
    background-color: #DAA49A;
`


