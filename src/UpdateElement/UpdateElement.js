import React, { useState, useEffect } from "react";
import "./UpdateElement.css";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function UpdateElement() {
  const { id } = useParams(); 
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/login");
  }

  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/stories/${id}`)
      .then((res) => {
        const { title, label, cover, content } = res.data;
        setTitle(title);
        setLabel(label);
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
      label,
      cover,
      content
    };
    
    try {
      axios.put(`/api/stories/update/${id}`, updatedStory)
      .then((res) => {
        alert('Story updated successfully');
        navigate("/library");
      });
    } catch (error) {
      alert('Error updating story. Please try again\n' + error);
    }
  };

  const handleDelete = () => {
    axios.delete(`/api/stories/delete/${id}`)
      .then(() => {
        navigate("/library");
        alert('Story deleted successfully');
      })
      .catch((error) => {
        console.error('Error during deletion:', error);
        alert('Error deleting story. Please try again\n' + error.message);
      });
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
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="label">Genre</label>
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
          <button className="update-button" onClick={handleUpdate}>Update Story</button>
          <button className="delete-button" onClick={handleDelete}>Delete Story</button>
        </form>
      </aside>
    </div>
  );
}

export default UpdateElement;