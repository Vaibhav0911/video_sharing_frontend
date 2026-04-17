import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Subscriptions", path: "/subscriptions" },
  { label: "History", path: "/history" },
  { label: "Liked Videos", path: "/liked-videos" },
  { label: "Playlists", path: "/playlists" },
  { label: "My Channel", path: "/channel/me" },
];

function Sidebar({ className = "" }) {
  return (
    <aside
      className={cn(
        "hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-gray-200 bg-white p-4 lg:block",
        className
      )}
    >
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "block rounded-xl px-4 py-2.5 text-sm font-medium transition",
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;