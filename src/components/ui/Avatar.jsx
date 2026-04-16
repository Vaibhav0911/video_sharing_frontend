import React from "react";
import { cn } from "../../utils/cn";

function Avatar({
  src,
  alt = "avatar",
  name = "",
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
    xl: "h-20 w-20 text-lg",
  };

  const fallback = name ? name.charAt(0).toUpperCase() : "?";

  return src ? (
    <img
      src={src}
      alt={alt}
      className={cn(
        "rounded-full object-cover",
        sizes[size],
        className
      )}
    />
  ) : (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-700",
        sizes[size],
        className
      )}
    >
      {fallback}
    </div>
  );
}

export default Avatar;