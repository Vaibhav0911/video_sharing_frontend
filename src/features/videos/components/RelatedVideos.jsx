import React from "react";
import VideoCard from "./VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";
import { EmptyState } from "../../../components/ui";

function RelatedVideos({ videos = [], loading = false }) {
  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <VideoCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!videos.length) {
    return (
      <EmptyState
        title="No related videos"
        description="Try watching another video."
      />
    );
  }

  return (
    <div className="space-y-4">
      {videos.map((video) => (
        <VideoCard
          key={video.slug || video._id}
          video={video}
          compact
        />
      ))}
    </div>
  );
}

export default RelatedVideos;