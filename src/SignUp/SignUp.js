// SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // Assume this CSS file will have similar styles to SignIn.css



function SignUp() {
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordShown(!isPasswordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!isConfirmPasswordShown);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Implement your sign-up logic here
    // Make sure to validate the input and confirm that
    // the password and confirm password fields match
    console.log(username, email, password, confirmPassword);
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <img src="/images/logo.png" alt="Logo" />
      </header>
      <div className="register-form-card">
        <h2>Join Us!</h2>
        <h3>Create your account</h3>
        <form className="register-form" onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              id="username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={isPasswordShown ? '/images/eyeclosed.png' : '/images/eyeopen.png'}
                alt="Toggle password visibility"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-container">
              <input
                type={isConfirmPasswordShown ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={isConfirmPasswordShown ? '/images/eyeclosed.png' : '/images/eyeopen.png'}
                alt="Toggle confirm password visibility"
                onClick={toggleConfirmPasswordVisibility}
                className="toggle-password"
              />
            </div>
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <div className="login-link">
          Already have an account? <a href="/signin">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

