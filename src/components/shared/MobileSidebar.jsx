import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Subscriptions", path: "/subscriptions" },
  { label: "History", path: "/history" },
  { label: "Liked Videos", path: "/liked-videos" },
  { label: "Playlists", path: "/playlists" },
  { label: "My Channel", path: "/channel/me" },
];

function MobileSidebar({ isOpen, onClose }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/40 transition",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "absolute left-0 top-0 h-full w-72 bg-white p-4 shadow-xl transition-transform duration-300 dark:bg-dark-surface",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Menu</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "block rounded-xl px-4 py-2.5 text-sm font-medium transition",
                  isActive
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-dark-text"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileSidebar;