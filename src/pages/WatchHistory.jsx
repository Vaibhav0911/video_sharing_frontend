import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { WatchHistoryList } from "../features/profile/components"
import { getWatchHistoryThunk } from "../features/profile/profileThunk.js";

function WatchHistory() {
  const dispatch = useDispatch();

  const { watchHistory, loading, error } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(getWatchHistoryThunk());
  }, [dispatch]);

  if (loading.fetchAll) {
    return <div className="p-6 text-white">Loading watch history...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-400">
        {error?.message || "Failed to load watch history"}
      </div>
    );
  }

  return (
    <main className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Watch History</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Recently watched videos from your account.
        </p>
      </div>

      <WatchHistoryList videos={watchHistory} />
    </main>
  );
}

export default WatchHistory;