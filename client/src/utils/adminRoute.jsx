import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const adminRoute = ({ children }) => {
  const { auth } = useAuth();
  const userRole = auth?.user?.role || auth?.role;
  if (userRole !== "admin") {
    return <Navigate to="/error" />;
  }
  return children;
};

export default adminRoute;
