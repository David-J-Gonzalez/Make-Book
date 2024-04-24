import React from 'react';
import StoryCard from './StoryCard';
import './GridContainer.css'; 

const GridContainer = ({ stories }) => {
  return (
    <div className="grid-container">
      {stories.map(story => (
        <StoryCard
          key={story.id}
          id={story.id}
          title={story.title}
          cover={story.cover}
          content={story.content}
          label={story.label}
        />
      ))}
    </div>
  );
};

export default GridContainer;