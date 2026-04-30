import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Sidebar,
  MobileSidebar,
  Footer,
} from "../components/shared";

function MainLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-dark-bg dark:text-dark-text">
      <Navbar onMenuClick={() => setIsMobileSidebarOpen(true)} />

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