import React from "react";
import { Link } from "react-router-dom";

function WatchHistoryList({ videos = [] }) {
  if (!videos.length) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-700 p-10 text-center">
        <h3 className="text-lg font-semibold text-white">No watch history</h3>
        <p className="mt-2 text-sm text-neutral-400">
          Videos you watch will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {videos.map((video) => (
        <Link
          key={video._id}
          to={`/watch-video/${video._id}/${video.slug}`}
          className="flex gap-4 rounded-xl bg-neutral-900 p-3 hover:bg-neutral-800"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-24 w-40 rounded-lg object-cover"
          />

          <div>
            <h3 className="line-clamp-2 font-semibold text-white">
              {video.title}
            </h3>

            <p className="mt-1 text-sm text-neutral-400">
              {video.owner?.username || "Unknown creator"}
            </p>

            <p className="mt-1 text-xs text-neutral-500">
              {video.views || 0} views
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WatchHistoryList;