import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../components/ui";
import { cn } from "../../../utils/cn";

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
      {!hideAvatar && (
        <Avatar
          src={ownerAvatar}
          alt={ownerName}
          name={ownerName}
          size="md"
          className="shrink-0"
        />
      )}

      <div className="min-w-0 flex-1">
        <Link
          to={`/watch-video/${videoId}/${slug || ""}`}
          className="line-clamp-2 text-sm font-semibold text-white hover:text-neutral-200"
        >
          {title}
        </Link>

        <p className="mt-1 truncate text-sm text-neutral-400">{ownerName}</p>

        <p className="mt-1 text-xs text-neutral-500">
          {views} views • {createdAt}
        </p>
      </div>
    </div>
  );
}

export default VideoInfo;