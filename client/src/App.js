
import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage'
import SignUpForm from './components/SignUpForm'
import Homepage from './components/Homepage'
import AppointmentList from './components/AppointmentList'


const App = () => {
  const [user, setUser] = useState(null)
  const [appointment, setAppointments] = useState([])
 
  const handleDeleteAppt = (selectedAppt) => {
    fetch(`/appointments/${selectedAppt.id}`, { 
      method: 'DELETE'
    })
    setAppointments((appointment) => appointment.filter(appt => appt.id !== selectedAppt.id))
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage user={user} setUser={setUser} />}/>
          <Route path="/signup" element={<SignUpForm user={user} setUser={setUser}/>}/>
          <Route path="/home" element={<Homepage user={user} setUser={setUser} appointment={appointment} setAppointments={setAppointments}/>}/>
          <Route path="/appointments" element={<AppointmentList user={user} appointment={appointment} setAppointments={setAppointments} handleDeleteAppt={handleDeleteAppt}/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
