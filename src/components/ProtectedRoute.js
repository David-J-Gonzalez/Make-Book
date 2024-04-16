// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"; // Adjust path as necessary

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Redirect to the login page if not logged in
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute; // Correct export statement
