import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../components/ui";
import { cn } from "../../../utils/cn";
import { timeAgo } from "../../../utils/timeAgo";

function VideoInfo({
  title,
  ownerName,
  ownerAvatar,
  views,
  createdAt,
  slug,
  videoId,
  className = "",
  hideAvatar = false,
}) {
  return (
    <div className={cn("flex gap-3", className)}>
      
      {/* Avatar → Channel */}
      {!hideAvatar && (
        <Link to={`/channel/${ownerName}`}>
          <Avatar
            src={ownerAvatar}
            alt={ownerName}
            name={ownerName}
            size="md"
            className="shrink-0 cursor-pointer hover:opacity-80 transition"
          />
        </Link>
      )}

      <div className="min-w-0 flex-1">
        
        {/* Title → Video */}
        <Link
          to={`/watch-video/${videoId}/${slug || ""}`}
          className="line-clamp-2 text-sm font-semibold text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-neutral-200"
        >
          {title}
        </Link>

        {/* Owner Name → Channel */}
        <Link
          to={`/channel/${ownerName}`}
          className="mt-1 block truncate text-sm text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-white"
        >
          {ownerName}
        </Link>

        <p className="mt-1 text-xs text-neutral-500">
          {views} views • {timeAgo(createdAt)}
        </p>
      </div>
    </div>
  );
}

export default VideoInfo;