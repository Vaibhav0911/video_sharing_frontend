import React from "react";
import { Search, X } from "lucide-react";
import { cn } from "../../utils/cn";

function SearchBar({
  value = "",
  onChange,
  onSubmit,
  onClear,
  placeholder = "Search videos...",
  className = "",
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex w-full items-center overflow-hidden rounded-full border border-gray-300 bg-white transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:border-gray-600 dark:bg-dark-surface dark:focus-within:border-blue-400 dark:focus-within:ring-blue-900",
        className
      )}
    >
      <div className="pl-4 text-gray-400">
        <Search size={18} />
      </div>

      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-10 flex-1 bg-transparent px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-dark-text dark:placeholder:text-gray-500"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          aria-label="Clear search"
        >
          {/* <X size={18} /> */}
        </button>
      )}

      <button
        type="submit"
        className="h-10 border-l border-gray-300 px-5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;