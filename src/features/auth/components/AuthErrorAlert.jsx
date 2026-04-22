import React from "react";

function AuthErrorAlert({ message }) {
  if (!message) return null;

  return (
    <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      {message}
    </div>
  );
}

export default AuthErrorAlert;