import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'; // Assume you've defined CSS for Navbar

const Navbar = () => {
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
        <div className="logout">
          <img src="/images/logout.png" alt="Logout" />
        </div>
        <div className="profile">
          <Link to= "/login"></Link>
            <img src="/images/profile.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
