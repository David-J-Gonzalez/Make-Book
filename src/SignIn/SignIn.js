// SignIn.js
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useAuth } from "../auth/AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordShown(!isPasswordShown);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 
    try {
      const response = await axios.post('/api/users/login', { email, password });
      if (response.data) {
        logIn(response.data);
        navigate("/");
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src="/images/logo.png" alt="Make Book Logo" />
      </header>
      <div className="login-form-card">
        <h2>Welcome!</h2>
        <h3>Sign in to Make Book</h3>
        {error && <p className="login-error">{error}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
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
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
              />
              <img
                src={isPasswordShown ? "/images/eyeclosed.png" : "/images/eyeopen.png"}
                alt="Toggle password visibility"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="register-link">
          Don't have an Account?{" "}
          <span
            onClick={handleSignUp}
            style={{ cursor: "pointer", color: "#0077cc" }}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
