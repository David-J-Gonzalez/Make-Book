// src/pages/Library.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridContainer from '../components/GridContainer'; // Ensure you import GridContainer
import './Library.css'; // Your Library specific styles if you have any

const Library = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('/api/stories');
        setStories(response.data);
      } catch (err) {
        setError('An error occurred while fetching stories.');
        console.error(err);
      }
      setLoading(false);
    };

    fetchStories();
  }, []);

  if (loading) {
    return <div>Loading stories...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="library-container">
      <GridContainer stories={stories} />
    </div>
  );
};

export default Library;
