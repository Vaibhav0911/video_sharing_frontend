import React from "react";
import SubscribedVideoCard from "./SubscribedVideoCard";

function SubscribedVideoGrid({ videos = [] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {videos.map((video) => (
        <SubscribedVideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default SubscribedVideoGrid;