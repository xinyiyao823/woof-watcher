
import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage'
import SignUpForm from './components/SignUpForm'
import Homepage from './components/Homepage'
import AppointmentList from './components/AppointmentList'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const App = () => {
  const [user, setUser] = useState(null)
  const [startDate, setStartDate] = useState(
    (setHours(setMinutes(new Date(), 0), 9))
  );
  
    useEffect(() => {
      fetch('/me')
      .then(r => r.json())
      .then(user =>  setUser(user))
    }, [])

    
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage user={user} setUser={setUser} />}/>
          <Route path="/signup" element={<SignUpForm user={user} setUser={setUser}/>}/>
          {user && <Route path="/home" element={<Homepage user={user} setUser={setUser}  startDate={startDate} setStartDate={setStartDate}/>}/>}
          {user && <Route path="/appointments" element={<AppointmentList user={user} setUser={setUser} startDate={startDate} setStartDate={setStartDate}/>}/>}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
