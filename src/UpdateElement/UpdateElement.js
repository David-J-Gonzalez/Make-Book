import React, { useState, useEffect } from "react";
import "./UpdateElement.css";
import GridContainer from "../components/GridContainer";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function UpdateElement() {
  const { id } = useParams(); // Assuming you're using a route like "/update/:id"
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/login");
  }

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the story to update
    axios.get(`/api/stories/${id}`)
      .then((res) => {
        const { title, genre, cover, content } = res.data;
        setTitle(title);
        setGenre(genre);
        setCover(cover);
        setContent(content);
        setLoading(false);
      })
      .catch((error) => {
        alert('Error fetching story. Please try again\n' + error);
        navigate("/");
      });
  }, [id, navigate]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    
    const updatedStory = {
      title,
      genre,
      cover,
      content
    };
    
    try {
      axios.put(`/api/stories/update/${id}`, updatedStory)
      .then((res) => {
        alert('Story updated successfully');
        navigate("/");
      });
    } catch (error) {
      alert('Error updating story. Please try again\n' + error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="update-container">
      <header>
        <h1>Update your book!</h1>
      </header>
      <main>
        <textarea
          id="story"
          name="story"
          placeholder="Update your story here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </main>
      <aside>
        <h2>Story Details</h2>
        <form onSubmit={handleUpdate}>
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
          <button type="submit" className="update-button">
            Update Story
          </button>
        </form>
      </aside>
      {/* You may not need the Your Stories section for updating a story, but I left it here for completeness */}
      <aside>
        <h2>Your Stories</h2>
        <div className="user-stories">
          <GridContainer stories={[{ title, genre, cover, content }]} />
        </div>
      </aside>
    </div>
  );
}

export default UpdateElement;