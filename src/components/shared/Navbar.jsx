import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import { Button } from "../ui";

function Navbar({
  searchValue = "",
  onSearchChange = () => {},
  onSearchSubmit = (e) => e.preventDefault(),
  onMenuClick = () => {},
}) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-700 dark:bg-dark-surface/95">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
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
          {/* <ThemeToggle /> */}

          {isAuthenticated ? (
            <>
              <Link to="/upload-video">
                <Button variant="outline" size="sm">
                  Upload
                </Button>
              </Link>

              <UserMenu />
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