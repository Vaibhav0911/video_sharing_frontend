import { Modal, Button } from "../../../components/ui";

function DeletePlaylistModel({
  isOpen,
  onClose,
  onConfirm,
  loading = false,
  playlistName = "",
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Playlist?">
      <div className="space-y-5">
        <p className="text-sm text-gray-600">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-gray-900">
            {playlistName || "this playlist"}
          </span>
          ? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm} loading={loading}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePlaylistModel;