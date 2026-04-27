import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikedVideosThunk } from "../features/likes/likeThunk";
import VideoCard from "../features/videos/components/VideoCard";
import { Loader, EmptyState, ErrorState } from "../components/ui";

function LikedVideos() {
  const dispatch = useDispatch();

  const { likedVideos, likedVideosLoading, likedVideosError } = useSelector(
    (state) => state.likes
  );

  useEffect(() => {
    dispatch(getLikedVideosThunk());
  }, [dispatch]);

  if (likedVideosLoading) {
    return (
      <div className="flex justify-center py-20">
        <Loader size="lg" />
      </div>
    );
  }

  if (likedVideosError) {
    return (
      <ErrorState
        title="Failed to load liked videos"
        description={likedVideosError}
        onAction={() => dispatch(getLikedVideosThunk())}
      />
    );
  }

  if (!likedVideos.length) {
    return (
      <EmptyState
        title="No liked videos"
        description="Videos you like will appear here."
      />
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Liked Videos</h1>
        <p className="text-sm text-gray-500">
          Videos you have liked
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {likedVideos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </section>
  );
}

export default LikedVideos;