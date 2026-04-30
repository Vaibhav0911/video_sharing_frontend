import React from "react";
import { cn } from "../../utils/cn";

function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Search videos...",
  className = "",
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex w-full items-center gap-2", className)}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-10 w-full rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-900"
      />
      <button
        type="submit"
        className="h-10 rounded-full border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-dark-surface dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;