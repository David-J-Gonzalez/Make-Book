import React, { useState } from "react";
import "./CreateElement.css";
import GridContainer from "../components/GridContainer";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateElement() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/login");
  }

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [stories, setStories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const newStory = {
      title,
      genre,
      cover,
      content
    };
    try {
      axios.post('/routes/stories', newStory)
      .then((res) => {
        setStories([...stories, newStory]);
        setTitle("");
        setGenre("");
        setCover("");
        setContent("");
      });
    } catch (error) {
      alert('Error creating story. Please try again\n' + error);
    }
  };

  return (
    <div id="container">
      <header>
        <h1>Make your book!</h1>
      </header>
      <main>
        <textarea
          id="story"
          name="story"
          placeholder="Write your story here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </main>
      <aside>
        <h2>Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
          <label htmlFor="cover">Book cover URL</label>
          <input
            type="text"
            id="cover"
            name="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            required
          />
          <button type="submit" className="create-button">
            Add Story
          </button>
        </form>
      </aside>
      <aside>
        <h2>Your Stories</h2>
        <div className="user-stories">
          <GridContainer stories={stories} />
        </div>
      </aside>
    </div>
  );
}

export default CreateElement;