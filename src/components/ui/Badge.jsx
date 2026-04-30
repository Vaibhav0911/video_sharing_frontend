import React from "react";
import { cn } from "../../utils/cn";

const variants = {
  default: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100",
  success: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100",
  warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-100",
  danger: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100",
};

function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;