import React from "react";
import { Link } from "react-router-dom";

function SubscriptionEmptyState() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white p-8 text-center dark:border-neutral-700 dark:bg-neutral-950">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">No subscriptions yet</h2>

      <p className="mt-2 max-w-md text-sm text-gray-600 dark:text-neutral-400">
        Subscribe to channels to see their latest videos here.
      </p>

      <Link
        to="/"
        className="mt-5 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Explore videos
      </Link>
    </div>
  );
}

export default SubscriptionEmptyState;