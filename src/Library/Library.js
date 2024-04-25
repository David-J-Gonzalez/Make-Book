import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridContainer from '../components/GridContainer';
import './Library.css'; // Ensure CSS is correctly imported

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
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return <div>Loading stories...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const storiesWithIds = stories.map(story => ({ ...story, id: story._id }));

  return (
    <div className="library-container">
      <h1 className="library-title">Library</h1> {/* Added title */}
      <GridContainer stories={storiesWithIds} />
    </div>
  );
};

export default Library;