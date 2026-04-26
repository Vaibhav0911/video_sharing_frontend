import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "../../../components/ui";
import { deleteVideoThunk } from "../videoThunk";

function VideoDeleteModal({ isOpen, onClose, videoId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.videos);

  const handleDelete = async () => {
    const result = await dispatch(deleteVideoThunk(videoId));

    if (deleteVideoThunk.fulfilled.match(result)) {
      onClose();
      navigate("/");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Video">
      <p className="text-sm text-gray-600">
        Are you sure you want to delete this video? This action cannot be undone.
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>

        <Button variant="danger" loading={loading.delete} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}

export default VideoDeleteModal;