import React from "react";

function AuthDivider({ text = "or continue with" }) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10" />
      </div>

      <div className="relative flex justify-center">
        <span className="bg-neutral-950 px-3 text-sm text-gray-400">{text}</span>
      </div>
    </div>
  );
}

export default AuthDivider;