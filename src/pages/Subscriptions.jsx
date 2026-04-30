import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {SubscribedChannelList, SubscribedVideoGrid, SubscriptionEmptyState} from "../features/subscriptions/components";

import {
  getMySubscribedChannelsThunk,
  getSubscribedChannelVideosThunk,
} from "../features/subscriptions/subscriptionThunk";

function SubscriptionsPage() {
  const dispatch = useDispatch();

  const {
    subscribedChannels,
    subscribedVideos,
    channelsLoading,
    videosLoading,
    error,
  } = useSelector((state) => state.subscriptions);

  useEffect(() => {
    dispatch(getMySubscribedChannelsThunk());
    dispatch(getSubscribedChannelVideosThunk({ page: 1, limit: 12 }));
  }, [dispatch]);

  if (channelsLoading || videosLoading) {
    return (
      <main className="p-6 text-gray-900 dark:text-white">
        Loading subscriptions...
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-6 text-red-600 dark:text-red-400">
        {error?.message || "Failed to load subscriptions"}
      </main>
    );
  }

  if (!subscribedChannels.length) {
    return (
      <main className="p-4 md:p-6">
        <SubscriptionEmptyState />
      </main>
    );
  }

  return (
    <main className="grid gap-6 p-4 md:grid-cols-[320px_1fr] md:p-6">
      <aside className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Subscriptions</h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Channels you subscribed to
          </p>
        </div>

        <SubscribedChannelList channels={subscribedChannels} />
      </aside>

      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Latest videos
          </h2>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Videos from all subscribed channels
          </p>
        </div>

        {subscribedVideos.length ? (
          <SubscribedVideoGrid videos={subscribedVideos} />
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center dark:border-neutral-700 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              No videos found
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Your subscribed channels have not uploaded videos yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default SubscriptionsPage;