import React from "react";
import { Link } from "react-router-dom";

function SubscribedVideoCard({ video }) {
  if (!video) return null;
  
  return (
    <Link
      to={`/watch-video/${video._id}/${video.slug}`}
      className="group block"
    >
      <div className="aspect-video overflow-hidden rounded-xl bg-neutral-800">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex gap-3">
        <img
          src={video.owner?.profileimage}
          alt={video.owner?.username}
          className="h-9 w-9 rounded-full object-cover"
        />

        <div className="min-w-0">
          <h3 className="line-clamp-2 text-sm font-semibold text-white">
            {video.title}
          </h3>

          <p className="mt-1 text-sm text-neutral-400">
            {video.owner?.fullname || video.owner?.username}
          </p>

          <p className="text-xs text-neutral-500">
            {video.views || 0} views
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SubscribedVideoCard;