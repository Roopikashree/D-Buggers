import React from 'react'
import '../LoginSignup/Login.css'
export const LoginSignup = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Log In</button>
        
      </div>
       
    </div>
  )
}
export default LoginSignup;