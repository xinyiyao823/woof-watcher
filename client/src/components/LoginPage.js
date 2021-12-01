import React from 'react'
import LoginForm from './LoginForm'
import {useNavigate} from "react-router-dom";


function Login({user, setUser}) {
    const navigate = useNavigate()
    // const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="login-container">
          <LoginForm user={user} setUser={setUser}/>
          <p>
          Don't have an account? &nbsp;
          <button 
          color="secondary" 
          onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
          </p>

        </div>
    )
}

export default Login
