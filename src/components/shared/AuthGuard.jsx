import React from "react";
import Loader from "../ui/Loader";

function AuthGuard({ loading, children }) {
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  return children;
}

export default AuthGuard;