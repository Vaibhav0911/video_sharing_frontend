import React from "react";

function VideoPlayer({ src, poster, title }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-black">
      <video
        controls
        poster={poster}
        className="aspect-video w-full bg-black"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;