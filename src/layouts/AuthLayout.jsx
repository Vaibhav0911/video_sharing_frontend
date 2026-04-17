import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/shared";

function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;