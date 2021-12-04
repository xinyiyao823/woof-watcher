import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ApptModal from './ApptModal'

function SignUpForm({user, setUser}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,  
        email,
        password,

      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Full Name:</Label>
        <Input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br/>
        <Label htmlFor="name">Age:</Label>
        <Input
            type="text"
            id="age"
            autoComplete="off"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        /><br/>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        /><br/>
        <Button 
        type="submit"
        
        >{isLoading ? "Loading..." : "Sign Up"}
        </Button>
          {errors.map((err) => (
            <p style={{color: "red"}} key={err}>{err}</p>
          ))}
      </form>
      <Button onClick={() => navigate("/")}>Cancel</Button>
    </div>
    <ApptModal />
    </>
  );
}

export default SignUpForm

const Button = styled.button`
    margin: 15px;
    border-radius: 30px;
    border: none;
    font-color: white;
    font-size: 18px;
    padding: 10px;
    font-family: 'Fuzzy Bubbles', cursive;
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
`
