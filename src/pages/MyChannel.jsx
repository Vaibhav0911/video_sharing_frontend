import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MyChannel() {
  const { user } = useSelector((state) => state.auth);

  if (!user?.username) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to={`/channel/${user.username}`} replace />;
}

export default MyChannel;