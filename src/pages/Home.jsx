import { useEffect } from "react";
import { VideoGrid } from "../features/videos/components";
import { useDispatch, useSelector } from "react-redux";
import { getVideosThunk } from "../features/videos/videoThunk";

function Home() {
  
  const dispatch = useDispatch();
  const {videos, loading, error} = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getVideosThunk({ page: 1, limit: 5 }));
  }, [dispatch])

  return (
     <section className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Home</h1>
      <VideoGrid videos={videos} loading={false} error={null} />
    </section>
  );
}

export default Home;