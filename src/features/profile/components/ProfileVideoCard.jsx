import React from "react";
import { Link } from "react-router-dom";

function ProfileVideoCard({ video }) {
  if (!video) return null;

  return (
    <Link
      to={`/watch/${video.videoId}/${video.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm dark:bg-neutral-950"
    >
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-neutral-800">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">
          {video.title}
        </h3>

        <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400">
          {video.views || 0} views
        </p>
      </div>
    </Link>
  );
}

export default ProfileVideoCard;