import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import VideoForm from "./VideoForm";
import { uploadVideoThunk } from "../videoThunk";

function VideoUploadForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.videos);

  const handleUpload = async (data) => {
    const result = await dispatch(uploadVideoThunk(data));

    if (uploadVideoThunk.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <VideoForm
      mode="create"
      onSubmit={handleUpload}
      loading={loading.upload}
      submitLabel="Upload Video"
    />
  );
}

export default VideoUploadForm;