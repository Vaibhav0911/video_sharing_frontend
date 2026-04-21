import React from "react";
import { cn } from "../../../utils/cn";

function VideoThumbnail({
  src,
  alt = "video thumbnail",
  duration,
  className = "",
  onClick,
}) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-800",
        className
      )}
      onClick={onClick}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
          No thumbnail
        </div>
      )}

      {duration && (
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
          {duration}
        </span>
      )}
    </div>
  );
}

export default VideoThumbnail;