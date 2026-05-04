import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Sidebar, MobileSidebar, Footer } from "../components/shared";

function MainLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    setSearchValue(query);
  }, [location.search]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = searchValue.trim();

    if (!trimmedValue) {
      navigate("/");
      return;
    }

    navigate(`/search?query=${encodeURIComponent(trimmedValue)}`);
  };

  const handleSearchClear = () => {
    setSearchValue("");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-dark-bg dark:text-dark-text">
      <Navbar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        onSearchClear={handleSearchClear}
        onMenuClick={() => setIsMobileSidebarOpen(true)}
      />

      <div className="flex">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        <main className="min-h-[calc(100vh-64px)] flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
