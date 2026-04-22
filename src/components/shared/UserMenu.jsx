import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../features/auth/authThunk";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.auth);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      handleClose();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      handleClose();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={handleToggle}
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Open user menu"
      >
        <Avatar
          src={user?.profileimage}
          name={user?.username || user?.fullname}
          size="md"
        />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="truncate text-sm font-semibold text-gray-900">
              {user?.fullname || "User"}
            </p>
            <p className="truncate text-xs text-gray-500">
              @{user?.username || "username"}
            </p>
          </div>

          <div className="py-2">
            <Link
              to="/channel/me"
              onClick={handleClose}
              className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              My Channel
            </Link>

            <Link
              to="/dashboard"
              onClick={handleClose}
              className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              Dashboard
            </Link>

            <Link
              to="/history"
              onClick={handleClose}
              className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              History
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              disabled={loading}
              className="block w-full px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserMenu;