import React from "react";
import { Link } from "react-router-dom";
import VideoThumbnail from "./VideoThumbnail";
import VideoInfo from "./VideoInfo";

function VideoCard({ video, compact = false }) {
  if (!video) return null;

  const {
    _id: videoId,
    slug,
    title,
    thumbnail,
    duration,
    views,
    createdAt,
    owner,
  } = video;

  const watchLink = `/watch-video/${videoId}/${slug || ""}`;

  if (compact) {
    return (
      <Link to={watchLink} className="group flex gap-3">
        <div className="w-40 shrink-0">
          <VideoThumbnail
            src={thumbnail}
            alt={title}
            duration={duration}
            className="rounded-lg"
          />
        </div>

        <VideoInfo
          title={title}
          ownerName={owner?.username || "Unknown"}
          ownerAvatar={owner?.profileimage}
          views={views}
          createdAt={createdAt}
          slug={slug}
          videoId={videoId}
          hideAvatar
        />
      </Link>
    );
  }

  return (
    <article className="group space-y-3">
      <Link to={watchLink} className="block">
        <VideoThumbnail src={thumbnail} alt={title} duration={duration} />
      </Link>

      <VideoInfo
        title={title}
        ownerName={owner?.username || "Unknown"}
        ownerAvatar={owner?.profileimage}
        views={views}
        createdAt={createdAt}
        slug={slug}
        videoId={videoId}
      />
    </article>
  );
}

export default VideoCard;