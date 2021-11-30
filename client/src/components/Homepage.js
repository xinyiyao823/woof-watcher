import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import SitterList from './SitterList'
import {fetchSitters} from '../redux/sittersSlice'
import { useDispatch, useSelector } from 'react-redux'


function Homepage({user, setUser}) {
    const dispatch = useDispatch()
    // const [sitters, showSitters] = useState([])
    const [search, setSearch] = useState("")
    const [sortPrice, setSortPrice] = useState(null);

    useEffect(() => {
        dispatch(fetchSitters('/sitters'))
        // fetch("/sitters")
        // .then(r => r.json())
        // .then(data => showSitters(data))
    }, [])
    const sitters = useSelector(state => state.sitters)

    // const searchedSitters = sitters.filter(sitter => {
    //     return sitter.name.toLowerCase().includes(search.toLowerCase())
    // })

    const sitterRates = sitters.map(sitter => {
        return sitter.hourly_rate
    })

    const sortedSitters = [...sitters].sort((sitter1, sitter2) => {
        if (sortPrice === "Low") {
             return sitter1.hourly_rate - sitter2.hourly_rate
        } else { 
            return sitter2.hourly_rate - sitter1.hourly_rate
        }
    }) 

    const searchedSitters = sortedSitters.filter(sitter => {
        return sitter.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            
            <Navbar user={user} setUser={setUser}/>
            <SearchBar search={search} setSearch={setSearch}/>
            <button>View My Appointments</button>
            <DropDown sitterRates={sitterRates} sortPrice={sortPrice} setSortPrice={setSortPrice} />
            <SitterList sitters={sitters} searchedSitters={searchedSitters} sortedSitters={sortedSitters} />
            
        </div>
    )
}

export default Homepage
