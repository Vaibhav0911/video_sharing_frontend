import { useParams } from "react-router-dom";

function WatchVideo() {
  const { videoId } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">Watch Video</h1>
      <p className="mt-2 text-zinc-400">Video ID: {videoId}</p>
    </section>
  );
}

export default WatchVideo;