import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  VideoPlayer,
  VideoMeta,
  VideoActions,
  ChannelInfo,
  RelatedVideos,
} from "../features/videos/components";
import { useDispatch, useSelector } from "react-redux";
import { getVideosThunk, getVideoThunk } from "../features/videos/videoThunk";

function WatchVideo() {
  
  const dispatch = useDispatch();
  const { videoId, slug } = useParams();
  const { selectedVideo, videos, loading, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    if(videoId && slug)     dispatch(getVideoThunk({id: videoId, slug}))
  }, [dispatch, videoId, slug])

  useEffect(() => {
    if(!videos.length)      dispatch(getVideosThunk({page: 1, limit: 3}));
  })

  if (loading && !selectedVideo) {
    return <div className="text-white">Loading video...</div>;
  }

  if (error) {
    return <div className="text-red-400">{error}</div>;
  }

  if (!selectedVideo) {
    return <div className="text-white">Video not found</div>;
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
        <VideoActions />

        <ChannelInfo
          channelName={selectedVideo.owner?.username}
          channelAvatar={selectedVideo.owner?.profileimage}
          subscribers="1.2K"
        />
      </div>

      <aside>
        <RelatedVideos
          videos={videos.filter((video) => video._id !== selectedVideo._id)}
          loading={false}
        />
      </aside>
    </div>
  );
}

export default WatchVideo;