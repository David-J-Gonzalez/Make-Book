// SignIn.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import eyeOpenImg from '../images/eye1.png';
import eyeCloseImg from '../images/eye2.png'; 

function SignIn() {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!isPasswordShown);
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <header className="login-header">
          <img src="styles/e-book_loge-removebg.png" alt="Make Book Logo" />
        </header>
        <div className="login-form-card">
          <h2>Welcome!</h2>
          <h3>Sign in to</h3>
          <h5>Make Book</h5>
          <form className="login-form">
            <div className="input-group">
              <label htmlFor="username">User name</label>
              <input type="text" id="username" placeholder="Enter your user name" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={isPasswordShown ? "text" : "password"}
                  id="password"
                  placeholder="Enter your Password"
                />
                <img
                  src={isPasswordShown ? eyeCloseImg : eyeOpenImg}
                  alt="Toggle password visibility"
                  onClick={togglePasswordVisibility}
                  style={{cursor: 'pointer'}} // Add this for better UX
                />
              </div>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="register-link">
            Don't have an Account? <a href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
