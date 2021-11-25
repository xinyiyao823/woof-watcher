import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";


function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null)
    
    const navigate = useNavigate();
    // console.log(errors)
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) =>  setUser(user));
        } else {
          r.json().then((error) => setErrors(error));
        }
      });
    }
    return (
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br/>
            {/* <p style={{color: "red"}}>{errors.errors}</p> */}
            <button 
            variant="fill" 
            color="primary" 
            type="submit"
            onClick={() => navigate('/home')}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            
            {/* {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))} */}
            {console.log(errors.errors)}
          </form>
        </div>
    )
}

export default LoginForm
