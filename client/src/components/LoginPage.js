import React, { useState } from 'react'
import LoginForm from './LoginForm'
import LoginNavbar from './LoginNavbar'
import styled from 'styled-components';
// import { IoPaw } from 'react-icons/io5';




function Login({user, setUser}) {
    const [showLogin, setShowLogin] = useState(false );

    return (
        <div className="login-container">

          <LoginNavbar showLogin={showLogin} setShowLogin={setShowLogin}/>
          <Header>W🐶🐶F WATCHER</Header>
          <div className="paw-print-container">
            <div className="paw-fingers-container">
                <div id="paw1" className="paw-fingers paw-print">
                  <div className="paw1-toe-beans"></div>
                </div>
                <div id="paw2" className="paw-fingers paw-print">
                  <div className="paw2-toe-beans"></div>
                </div>
                <div id="paw3" className="paw-fingers paw-print">
                  <div className="paw3-toe-beans"></div>
                </div>
                <div id="paw4"className="paw-fingers paw-print">
                  <div className="paw4-toe-beans"></div>
                </div>
            </div>
            <div className="main-paw-print-paw-print">
              <div className="inner-main-paw-print">
                  { showLogin ? <LoginForm user={user} setUser={setUser} /> : null }
              </div>   
            </div>
          </div>    
        </div>
    )
}

export default Login

const Header = styled.h1`
  font-family: 'Luckiest Guy', cursive;
  font-size: 7em;
  margin-top: 0;
  margin-bottom: 20px;
  
  
`
