import React, { useState } from 'react'
import LoginForm from './LoginForm'
import LoginNavbar from './LoginNavbar'



function Login({user, setUser}) {
    const [showLogin, setShowLogin] = useState(false );

    return (
        <div className="login-container">
          <LoginNavbar showLogin={showLogin} setShowLogin={setShowLogin}/>
          <div className="paw-print-container">
            <div className="paw-fingers-container">
                <div id="paw1" className="paw-fingers paw-print">
                    <div className="paw-toe-beans"></div>
                </div>
                <div id="paw2" className="paw-fingers paw-print">
                    <div className="paw-toe-beans"></div>
                </div>
                <div id="paw3" className="paw-fingers paw-print">
                    <div className="paw-toe-beans"></div>
                </div>
                <div id="paw4"className="paw-fingers paw-print">
                    <div className="paw-toe-beans"></div>
                </div>
            </div>

            <div className="main-paw-print paw-print">
                <div className="inner-main-paw-print">
                    { showLogin ? <LoginForm user={user} setUser={setUser} /> : null }
                </div>
            </div>
        </div>

        </div>
    )
}

export default Login
