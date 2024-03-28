// src/components/StoryCard.js
import React from 'react';
import './StoryCard.css'; // Make sure to adjust the CSS file accordingly

const StoryCard = ({ title, imageSrc, description, label }) => {
  return (
    <div className="story-card">
      {imageSrc && <img src={imageSrc} alt={title} />}
      <div className="story-content">
        <h3>{title}</h3>
        {label && <p className="story-label">{label}</p>}
        <p>{description}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default StoryCard;
