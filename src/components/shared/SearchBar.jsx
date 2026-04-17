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
        className="h-10 w-full rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400"
      />
      <button
        type="submit"
        className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;