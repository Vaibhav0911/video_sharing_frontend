import React from "react";
import { cn } from "../../utils/cn";

function Loader({ size = "md", className = "" }) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400",
        sizes[size],
        className
      )}
    />
  );
}

export default Loader;