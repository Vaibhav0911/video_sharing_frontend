import React from "react";
import { cn } from "../../utils/cn";

function Input({
  label,
  error,
  className = "",
  containerClassName = "",
  ...props
}) {
  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        className={cn(
          "w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-900 disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:opacity-60",
          error && "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900",
          className
        )}
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Input;