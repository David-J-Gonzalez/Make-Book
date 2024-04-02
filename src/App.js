import React from 'react';
import Navbar from './components/Navbar';
import GridContainer from './components/GridContainer';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

const stories = [
  {
    id: 1,
    title: 'Nexus Chronicles',
    imageSrc: '/images/nexus.jpg',
    description: 'The Nexus Chronicles is a heart-wrenching saga of a group of very different personalities developing machinery to build a kingdom.',
    label: 'Popular Story'
  },
  {
    id: 2,
    title: 'Echoes of the Void',
    imageSrc: '/images/echo.jpg',
    description: 'In the depths of the stars, a lost traveler stumbles upon a forgotten planet on which the mysterious remains of an ancient civilization are preserved.',
    label: 'Popular Story'
  },
  {
    id: 3,
    title: 'Aeon Ascension',
    imageSrc: '/images/aeon.jpg',
    description: 'In a distant future, mankind has achieved mechanical immortality through rapid advances in technology.',
    label: 'Popular Story'
  },
  {
    id: 4,
    title: 'Create Your Story',
    imageSrc: '/images/plus.jpg',
    description: 'Have an idea? Bring your story to life.',
    label: 'Create Your Story'
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<GridContainer stories={stories} />} />
          <Route path="/signup" element={
            <div>
              <h2>Sign Up Page</h2>
              {/* Placeholder or component for signup content */}
            </div>
          } />
          <Route path="/createElement" element={
            <div>
              <h2>Create Element Page</h2>
              {/* Placeholder or component for signup content */}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
