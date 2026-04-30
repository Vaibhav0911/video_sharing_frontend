import React from "react";

function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h1>
      {subtitle ? (
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default AuthHeader;