import React from "react";
import { cn } from "../../utils/cn";

function Select({
  label,
  error,
  options = [],
  className = "",
  containerClassName = "",
  ...props
}) {
  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-dark-text">
          {label}
        </label>
      )}

      <select
        className={cn(
          "w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text dark:focus:border-blue-400 dark:focus:ring-blue-900 disabled:cursor-not-allowed disabled:opacity-60",
          error && "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

export default Select;