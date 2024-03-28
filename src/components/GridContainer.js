// src/components/GridContainer.js
import React from 'react';
import StoryCard from './StoryCard';
import './GridContainer.css'; // Importing CSS for styling

const GridContainer = ({ stories }) => {
  return (
    <div className="grid-container">
      {stories.map(story => (
        <StoryCard
          key={story.id}
          title={story.title}
          imageSrc={story.imageSrc}
          description={story.description}
          label={story.label}
        />
      ))}
    </div>
  );
};

export default GridContainer;
