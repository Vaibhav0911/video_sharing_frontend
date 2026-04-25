import React from "react";
import { Link } from "react-router-dom";

function SubscriptionEmptyState() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-700 bg-neutral-950 p-8 text-center">
      <h2 className="text-xl font-bold text-white">No subscriptions yet</h2>

      <p className="mt-2 max-w-md text-sm text-neutral-400">
        Subscribe to channels to see their latest videos here.
      </p>

      <Link
        to="/"
        className="mt-5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
      >
        Explore videos
      </Link>
    </div>
  );
}

export default SubscriptionEmptyState;