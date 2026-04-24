import React from "react";
import { Link } from "react-router-dom";

function ProfileVideoCard({ video }) {
  if (!video) return null;

  return (
    <Link
      to={`/watch/${video.videoId}/${video.slug}`}
      className="group block overflow-hidden rounded-xl bg-neutral-900"
    >
      <div className="aspect-video overflow-hidden bg-neutral-800">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-white">
          {video.title}
        </h3>

        <p className="mt-1 text-xs text-neutral-400">
          {video.views || 0} views
        </p>
      </div>
    </Link>
  );
}

export default ProfileVideoCard;