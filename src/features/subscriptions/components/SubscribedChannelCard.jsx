import React from "react";
import { Link } from "react-router-dom";

function SubscribedChannelCard({ channel }) {
  if (!channel) return null;

  return (
    <Link
      to={`/channel/${channel.username}`}
      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
    >
      <img
        src={channel.profileimage}
        alt={channel.username}
        className="h-12 w-12 rounded-full object-cover"
      />

      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-gray-900 dark:text-white">
          {channel.fullname || channel.username}
        </h3>

        <p className="truncate text-xs text-gray-500 dark:text-neutral-400">
          @{channel.username}
        </p>

        <p className="text-xs text-gray-500 dark:text-neutral-500">
          {channel.subscribersCount || 0} subscribers
        </p>
      </div>
    </Link>
  );
}

export default SubscribedChannelCard;