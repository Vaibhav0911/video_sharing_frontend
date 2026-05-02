import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

function Logo({ className = "", textClassName = "" }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-2", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-600 text-lg font-bold text-white shadow-sm">
        V
      </div>
      <span className={cn("text-lg font-semibold tracking-tight text-gray-900 dark:text-dark-text", textClassName)}>
        VideoTube
      </span>
    </Link>
  );
}

export default Logo;