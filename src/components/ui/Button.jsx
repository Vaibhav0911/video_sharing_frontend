import React from "react";
import { cn } from "../../utils/cn.js";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",
  secondary: "bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text dark:hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700",
  ghost: "text-gray-700 hover:bg-gray-100 dark:text-dark-text dark:hover:bg-gray-700",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400 dark:focus:ring-offset-dark-bg disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {!loading && leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </button>
  );
}

export default Button;