import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import VideoForm from "./VideoForm";
import { updateVideoThunk } from "../videoThunk";

function VideoUpdateForm({ video }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.videos);

  const handleUpdate = async (data) => {
    const result = await dispatch(
      updateVideoThunk({
        id: video._id,
        ...data,
      })
    );

    if (updateVideoThunk.fulfilled.match(result)) {
      navigate(`/watch-video/${video._id}/${video.slug}`);
    }
  };

  return (
    <VideoForm
      mode="update"
      initialValues={video}
      onSubmit={handleUpdate}
      loading={loading.update}
      submitLabel="Update Video"
    />
  );
}

export default VideoUpdateForm;