import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui";
import { VideoDeleteModal } from "../features/videos/components";
import {
  VideoPlayer,
  VideoMeta,
  VideoActions,
  ChannelInfo,
  RelatedVideos,
} from "../features/videos/components";
import { useDispatch, useSelector } from "react-redux";
import { getVideosThunk, getVideoThunk } from "../features/videos/videoThunk";
import { toggleSubscribeChannelThunk } from "../features/subscriptions/subscriptionThunk";
import { getLikesThunk } from "../features/likes/likeThunk";
import { CommentSection } from "../features/comments/components";

function WatchVideo() {
  const dispatch = useDispatch();
  const { videoId, slug } = useParams();
  const { selectedVideo, videos, loading, error } = useSelector(
    (state) => state.videos
  );

  const { user } = useSelector((state) => state.auth);
  const { toggleLoading } = useSelector((state) => state.subscriptions);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const isOwner = selectedVideo?.owner?._id === user?._id;

  useEffect(() => {
    if (videoId && slug) dispatch(getVideoThunk({ id: videoId, slug }));
  }, [dispatch, videoId, slug]);

  useEffect(() => {
    if (videoId && slug) dispatch(getVideosThunk({ page: 1, limit: 5 }));
  }, [dispatch, videoId, slug]);

  useEffect(() => {
    if (selectedVideo?._id) {
      dispatch(
        getLikesThunk({
          targetType: "videos",
          targetId: selectedVideo._id,
        })
      );
    }
  }, [dispatch, selectedVideo?._id]);

  const handleSubscribe = async () => {
    const username = selectedVideo.owner?.username;

    if (!username) return;

    const result = await dispatch(toggleSubscribeChannelThunk(username));

    if (toggleSubscribeChannelThunk.fulfilled.match(result)) {
      dispatch(getVideoThunk({ id: videoId, slug }));
    }
  };

  if (loading.fetchOne && !selectedVideo) {
    return <div className="text-gray-900 dark:text-white">Loading video...</div>;
  }

  if (error) {
    return <div className="text-red-600 dark:text-red-400">{error}</div>;
  }

  if (!selectedVideo) {
    return <div className="text-gray-900 dark:text-white">Video not found</div>;
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <VideoPlayer
          src={selectedVideo.videofile}
          poster={selectedVideo.thumbnail}
          title={selectedVideo.title}
        />
        <VideoMeta
          title={selectedVideo.title}
          views={selectedVideo.views}
          createdAt={selectedVideo.createdAt || "Recently uploaded"}
          description={selectedVideo.description}
        />
        <VideoActions video={selectedVideo} />

        {isOwner && (
          <div className="flex items-center gap-3">
            <Link
              to={`/videos/${selectedVideo._id}/${selectedVideo.slug}/edit`}
            >
              <Button variant="outline">Edit Video</Button>
            </Link>

            <Button variant="danger" onClick={() => setDeleteOpen(true)}>
              Delete Video
            </Button>
          </div>
        )}

        <VideoDeleteModal
          isOpen={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          videoId={selectedVideo._id}
        />

        <ChannelInfo
          channelName={selectedVideo.owner?.username}
          channelAvatar={selectedVideo.owner?.profileimage}
          subscribers={selectedVideo.owner?.subscribersCount || 0}
          isSubscribed={selectedVideo.owner?.isSubscribed}
          isOwner={selectedVideo.owner?._id === user?._id}
          loading={toggleLoading}
          onSubscribe={handleSubscribe}
        />

        <CommentSection videoId={selectedVideo._id} />
      </div>

      <aside>
        <RelatedVideos
          videos={videos.filter((video) => video._id !== selectedVideo._id)}
          loading={loading.fetchAll}
        />
      </aside>
    </div>
  );
}

export default WatchVideo;
