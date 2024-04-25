import React, { useState } from "react";
import "./CreateElement.css";
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
  const [label, setLabel] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [stories, setStories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const newStory = {
      title,
      cover,
      content,
      label
    };
  
    try {
      axios.post('/api/stories/create', newStory)
      .then((res) => {
        // You should use the story from the response here
        // assuming that the server sends back the created story object
        setStories([...stories, res.data]); 
        setTitle("");
        setCover("");
        setContent("");
        setLabel(""); // Assuming you have a 'label' state variable like the others
      })
      .catch((error) => {
        // This catch is for handling errors in the POST request
        alert('Error creating story. Please try again\n' + error);
      });
    } catch (error) {
      // This catch is likely for catching synchronous errors, which are less common in this context
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
            id="label"
            name="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
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
    </div>
  );
}

export default CreateElement;