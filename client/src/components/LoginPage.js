import React, { useState } from 'react'
import LoginForm from './LoginForm'
import LoginNavbar from './LoginNavbar'
import {useNavigate} from "react-router-dom";


function Login({user, setUser}) {
    const navigate = useNavigate()
    const [showLogin, setShowLogin] = useState(false );

    return (
        <div className="login-container">
          <LoginNavbar showLogin={showLogin} setShowLogin={setShowLogin}/>
          { showLogin ? <LoginForm user={user} setUser={setUser} /> : null }
          {/* <p>
          Don't have an account? &nbsp;
          <button 
          color="secondary" 
          onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
          </p> */}

        </div>
    )
}

export default Login
