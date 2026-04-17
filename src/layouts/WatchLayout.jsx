import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, MobileSidebar } from "../components/shared";

function WatchLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar onMenuClick={() => setIsMobileSidebarOpen(true)} />

      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      <main className="px-3 py-4 sm:px-5 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default WatchLayout;