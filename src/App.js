import React from "react";
import Navbar from "./NavBar/Navbar";
import GridContainer from "./components/GridContainer";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Library from "./Library/Library";
import UserAccount from "./UserAccount/UserAccount";
import CreateElement from "./CreateElement/CreateElement";
import UpdateElement from "./UpdateElement/UpdateElement";
import NotFound from "./components/NotFound"; // Import the NotFound component
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

  const stories = [
    {
      id: 1,
      title: "Nexus Chronicles",
      cover: "/images/nexus.jpg",
      content:
        "The Nexus Chronicles is a heart-wrenching saga of a group of very different personalities developing machinery to build a kingdom.",
      label: "Popular Story",
    },
    {
      id: 2,
      title: "Echoes of the Void",
      cover: "/images/echo.jpg",
      content:
        "In the depths of the stars, a lost traveler stumbles upon a forgotten planet on which the mysterious remains of an ancient civilization are preserved.",
      label: "Popular Story",
    },
    {
      id: 3,
      title: "Aeon Ascension",
      cover: "/images/aeon.jpg",
      content:
        "In a distant future, mankind has achieved mechanical immortality through rapid advances in technology.",
      label: "Popular Story",
    },
  ];

  function App() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<GridContainer stories={stories} />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/library" element={<Library />} />
              <Route path="/useraccount" element={<ProtectedRoute><UserAccount /></ProtectedRoute>} />
              <Route path="/createelement" element={<ProtectedRoute><CreateElement /></ProtectedRoute>} />
              <Route path="/updateelement/:id" element={<ProtectedRoute><UpdateElement /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    );
  }
  
  export default App;