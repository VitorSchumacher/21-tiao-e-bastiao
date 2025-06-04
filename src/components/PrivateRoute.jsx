import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userData = localStorage.getItem("userData");
  return userData ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
