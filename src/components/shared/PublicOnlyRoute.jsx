import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicOnlyRoute({ children }) {
  const { isAuthenticated, authChecked } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!authChecked) return null;

  if (isAuthenticated) {
    const redirectTo = location.state?.from?.pathname || "/";
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

export default PublicOnlyRoute;