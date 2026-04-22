import React from "react";
import { Link } from "react-router-dom";

function AuthRedirectText({ text, linkText, to }) {
  return (
    <p className="mt-6 text-center text-sm text-gray-400">
      {text}{" "}
      <Link to={to} className="font-medium text-blue-400 hover:text-blue-300">
        {linkText}
      </Link>
    </p>
  );
}

export default AuthRedirectText;