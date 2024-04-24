import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoryCard.css';

const StoryCard = ({ id, title, cover, content, label }) => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/updateelement/${id}`);
  };

  return (
    <div className="story-card">
      <img src={cover} alt={title} className="story-image" />
      <div className="story-details">
        <h3 className="story-title">{title}</h3>
        {label && <div className="story-label">{label}</div>}
        <p className="story-description">{content}</p>
        <button className="read-more-btn" onClick={handleUpdateClick}>Read More</button>
      </div>
    </div>
  );
};

export default StoryCard;