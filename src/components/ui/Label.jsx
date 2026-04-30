import React from "react";
import { cn } from "../../utils/cn";

function Label({ children, className = "", ...props }) {
  return (
    <label
      className={cn("block text-sm font-medium text-gray-700 dark:text-dark-text", className)}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;