import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Button, Avatar } from "../ui";

function Navbar({
  searchValue = "",
  onSearchChange = () => {},
  onSearchSubmit = (e) => e.preventDefault(),
  isAuthenticated = false,
  user = null,
  onMenuClick = () => {},
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

          <Logo />
        </div>

        <div className="hidden max-w-xl flex-1 lg:block">
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
          />
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link to="/upload">
                <Button variant="outline" size="sm">
                  Upload
                </Button>
              </Link>

              <Link to="/channel/me">
                <Avatar
                  src={user?.avatar}
                  name={user?.username || user?.fullname}
                  size="md"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </Container>

      <Container className="pb-3 lg:hidden">
        <SearchBar
          value={searchValue}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        />
      </Container>
    </header>
  );
}

export default Navbar;