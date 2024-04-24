import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { logOut } = useAuth();

  const handleLogin = () => {
    navigate('/login'); 
  };

  const handleCreate = () => {
    navigate('/createelement'); 
  };

  const handleLibrary = () => {
    navigate('/library'); 
  };

  const handleHome = () => {
    navigate('/'); 
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    logOut();
    navigate("/");
  };
  const handleAccount = () => {
    navigate('/useraccount'); 
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul>
        <li onClick={handleHome} style={{ cursor: 'pointer' }}>Home</li>
        <li onClick={handleCreate} style={{ cursor: 'pointer' }}>Make</li>
        <li onClick={handleLibrary} style={{ cursor: 'pointer' }}>Library</li>
        <li onClick={handleAccount} style={{ cursor: 'pointer' }}>Account</li>
      </ul>
      <form className="search-form">
        <input type="search" placeholder="Search" aria-label="Search" />
        <button type="submit">🔍</button>
      </form>
      <div className="user-controls">
        <img 
          src="/images/logout.png" 
          alt="Logout"
          onClick={handleLogOut}
          style={{ cursor: 'pointer' }} 
        />
        <div className="profile">
          <img src="/images/profile.png" alt="Profile" 
          onClick={handleLogin} 
          style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
