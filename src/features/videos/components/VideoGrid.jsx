import React from "react";
import VideoCard from "./VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";
import { EmptyState, ErrorState } from "../../../components/ui";

function VideoGrid({
  videos = [],
  loading = false,
  error = null,
  skeletonCount = 8,
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <VideoCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        title="Failed to load videos"
        description={error}
      />
    );
  }

  if (!videos.length) {
    return (
      <EmptyState
        title="No videos found"
        description="There are no videos to show right now."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {videos.map((video) => (
        <VideoCard
          key={video.slug || video._id}
          video={video}
        />
      ))}
    </div>
  );
}

export default VideoGrid;