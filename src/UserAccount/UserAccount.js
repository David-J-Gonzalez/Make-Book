// src/pages/UserAccount.js
import React from 'react';
import GridContainer from '../components/GridContainer';
import './UserAccount.css';

const UserAccount = () => {
  // Placeholder user data
  const user = {
    username: 'User',
    stories: [
        {
            id: 1,
            title: "Nexus Chronicles",
            imageSrc: "/images/nexus.jpg",
            description:
              "The Nexus Chronicles is a heart-wrenching saga of a group of very different personalities developing machinery to build a kingdom.",
            label: "Popular Story",
          },
          {
            id: 2,
            title: "Echoes of the Void",
            imageSrc: "/images/echo.jpg",
            description:
              "In the depths of the stars, a lost traveler stumbles upon a forgotten planet on which the mysterious remains of an ancient civilization are preserved.",
            label: "Popular Story",
          },
    ]
  };

  return (
    <div className="user-account-container">
      <div className="user-info">
        <h2>{user.username}'s Account</h2>
        {/* Add more user details here if needed */}
      </div>
      <h3>Your Stories:</h3>
      {/* Using GridContainer to display user's stories */}
      <GridContainer stories={user.stories} />
    </div>
  );
};

export default UserAccount;
