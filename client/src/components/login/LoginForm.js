import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components'
import { GiJumpingDog } from 'react-icons/gi'


function LoginForm({user, setUser}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false);    
    const navigate = useNavigate();

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
          r.json().then((user) =>  {
            console.log(user)
            setUser(user)
          });
          navigate("/home")
        } else {
          r.json().then((error) => setErrors(error));
        }
      });
    }
    return (
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <p style={{color: "red"}}>{errors.errors}</p>
            <Button 
            variant="fill" 
            color="primary" 
            type="submit"
            >
              {isLoading ? "Loading..." : <GiJumpingDog size={40}/> }
            </Button>
          </form>
        </div>
    )
}

export default LoginForm

const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-size: 18px;
    padding: 10px;
    font-family: 'Fuzzy Bubbles', cursive;
    background-color: #DAA49A;
`
const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 30px;
  border: none;
`
const Label = styled.label`
  font-family: 'Fuzzy Bubbles', cursive;
  font-size: 23px;
  font-color: black;
`
