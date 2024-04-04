// src/components/StoryCard.js
import React from 'react';
import './StoryCard.css';

const StoryCard = ({ title, imageSrc, description, label, onClick }) => {
  const handleClick = () => {
    if (onClick && label === 'Create Your Story') {
      onClick();
    }
  };

  return (
    <div className="story-card">
      {imageSrc && <img src={imageSrc} alt={title} />}
      <div className="story-content">
        <h3>{title}</h3>
        {label && <p className="story-label">{label}</p>}
        <p>{description}</p>
        {onClick ? (
          <button className="read-more-btn" onClick={onClick}>Read More</button>
        ) : (
          <button className="read-more-btn">Read More</button>
        )}
      </div>
    </div>
  );
};

export default StoryCard;