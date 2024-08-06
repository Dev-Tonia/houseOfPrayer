import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  // Assuming the user object has an api_token property for authentication
  if (user && user.api_token) {
    return <Outlet />;
  }

  // Redirect to login page if not authenticated
  return <Navigate to="/" replace />;
}
