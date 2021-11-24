import React from 'react'

function LoginForm() {
    return (
        <div>
            <form className="login-form" >
        
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
        /><br/>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
        /><br/>
         {/* <p style={{color: "red"}}>{errors.errors}</p> */}
        <button variant="fill" color="primary" type="submit">
            Login
          {/* {isLoading ? "Loading..." : "Login"} */}
        </button>
      
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        {/* {console.log(errors.errors)} */}
    </form>
        </div>
    )
}

export default LoginForm
