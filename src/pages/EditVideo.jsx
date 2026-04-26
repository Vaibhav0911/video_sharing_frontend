import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoUpdateForm from "../features/videos/components/VideoUpdateForm";
import { getVideoThunk } from "../features/videos/videoThunk";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Loader,
} from "../components/ui";

function EditVideo() {
  const { videoId, slug } = useParams();
  const dispatch = useDispatch();

  const { selectedVideo, loading } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getVideoThunk({ id: videoId, slug }));
  }, [dispatch, videoId, slug]);

  if (loading.update) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!selectedVideo) {
    return (
      <p className="p-6 text-center text-gray-600">
        Video not found.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Update Video</CardTitle>
        </CardHeader>

        <CardContent>
          <VideoUpdateForm video={selectedVideo} />
        </CardContent>
      </Card>
    </div>
  );
}

export default EditVideo;