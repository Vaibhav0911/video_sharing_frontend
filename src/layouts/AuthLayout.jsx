import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/shared";

function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10 text-gray-900 dark:from-dark-bg dark:to-dark-surface dark:text-dark-text">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-dark-surface">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;