
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage'
import SignUpForm from './components/SignUpForm'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpForm />}/>
          <Route path="/home" element={<Homepage />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
