import React from "react";
import { Navigate } from "react-router-dom";

// Redirect authenticated users away from public routes like login/register
const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoute;
