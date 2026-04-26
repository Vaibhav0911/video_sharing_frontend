import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Sidebar,
  MobileSidebar,
  PageHeader,
} from "../components/shared";

function DashboardLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar onMenuClick={() => setIsMobileSidebarOpen(true)} />

      <div className="flex">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {/* <PageHeader
            title="Dashboard"
            description="Manage your content, videos, and channel settings."
          /> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;