import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout


