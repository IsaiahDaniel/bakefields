import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const token = localStorage.length; 

  return (
    token ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;
