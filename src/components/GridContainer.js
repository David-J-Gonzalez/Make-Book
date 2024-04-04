// src/components/GridContainer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryCard from './StoryCard';
import './GridContainer.css'; // Ensure your CSS file path is correct

const GridContainer = ({ stories }) => {
  const navigate = useNavigate();

  // Function to navigate to the create element page
  const handleCreateStoryClick = () => {
    navigate('/createElement');
  };

  return (
    <div className="grid-container">
      {stories.map(story => (
        <StoryCard
          key={story.id}
          title={story.title}
          imageSrc={story.imageSrc}
          description={story.description}
          label={story.label}
          onClick={story.label === 'Create Your Story' ? handleCreateStoryClick : undefined}
        />
      ))}
    </div>
  );
};

export default GridContainer;

