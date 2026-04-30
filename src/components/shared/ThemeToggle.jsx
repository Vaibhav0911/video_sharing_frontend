import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-dark-surface dark:text-gray-300 dark:hover:bg-gray-700"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;