import React, { useState } from 'react';
import './CreateElement.css';
import GridContainer from '../components/GridContainer'; // Make sure this path is correct

function CreateElement() {
  // State for the form inputs
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState('');
  // State for the list of stories
  const [stories, setStories] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    // Create a new story object
    const newStory = {
      id: stories.length + 1, // Simple id assignment (not ideal for production)
      title,
      imageSrc: cover, // Assuming 'cover' holds the URL for the image
      description,
      label: genre, // Assuming you want to use 'genre' as the label
    };
    // Add the new story to the existing list of stories
    setStories([...stories, newStory]);
    // Clear the form fields
    setTitle('');
    setGenre('');
    setDescription('');
    setCover('');
  };

  return (
    <div id='container'>
      <header>
        <h1>Make your book!</h1>
      </header>
      <main>
        <textarea
          id='story'
          name='story'
          placeholder='Write your story here...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </main>
      <aside>
        <h2>Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='genre'>Genre</label>
          <input
            type='text'
            id='genre'
            name='genre'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <label htmlFor='cover'>Book cover URL</label>
          <input
            type='text'
            id='cover'
            name='cover'
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
          <button type="submit" className="create-button">Add Story</button>
        </form>
      </aside>
      <aside> 
        <h2>Your Stories</h2>
        <div className='user-stories'>
          <GridContainer stories={stories} />
        </div>
      </aside> 
    </div>
  );
};

export default CreateElement;
