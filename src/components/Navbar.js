import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout action
  const handleLogout = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Library</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <form className="search-form">
        <input type="search" placeholder="Search" aria-label="Search" />
        <button type="submit">🔍</button>
      </form>
      <div className="user-controls">
        <img 
          src="/images/logout.png" 
          alt="Logout" 
          onClick={handleLogout} 
          style={{ cursor: 'pointer' }} // This makes the cursor change to a pointer on hover, indicating the image is clickable
        />
        <div className="profile">
          <img src="/images/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
