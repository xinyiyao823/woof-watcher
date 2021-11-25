import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpForm() {

  const [fullName, setFullName] = useState("");
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
        fullName,
        age,  
        email,
        password,
      //   password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => console.log(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          /><br/>
          <label htmlFor="name">Age</label>
          <input
            type="text"
            id="age"
            autoComplete="off"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          /><br/>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          /><br/>

          {/* <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          /><br/> */}
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

          {/* {errors.map((err) => (
            <p style={{color: "red"}} key={err}>{err}</p>
          ))} */}

      </form>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default SignUpForm