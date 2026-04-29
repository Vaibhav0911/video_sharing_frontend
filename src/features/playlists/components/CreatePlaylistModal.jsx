import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Input,
  Textarea,
  Checkbox,
  Modal,
} from "../../../components/ui";

import {
  createPlaylistThunk,
  updatePlaylistThunk,
} from "../playlistThunk";

function CreatePlaylistModal({
  isOpen,
  onClose,
  mode = "create",
  playlist = null,
}) {
  const dispatch = useDispatch();

  const { createLoading, updateLoading } = useSelector(
    (state) => state.playlists
  );

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isPrivate: false,
  });

  const isEditMode = mode === "edit";

  useEffect(() => {
    if (isEditMode && playlist) {
      setFormData({
        name: playlist.name || "",
        description: playlist.description || "",
        isPrivate: playlist.isPrivate || false,
      });
    } else {
      setFormData({
        name: "",
        description: "",
        isPrivate: false,
      });
    }
  }, [isEditMode, playlist, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    if (isEditMode) {
      await dispatch(
        updatePlaylistThunk({
          playlistId: playlist._id,
          ...formData,
        })
      ).unwrap();
    } else {
      await dispatch(createPlaylistThunk(formData)).unwrap();
    }

    onClose();
  };

  const loading = createLoading || updateLoading;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "Edit Playlist" : "Create Playlist"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Playlist Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter playlist name"
          required
        />

        <Textarea
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write a short description"
        />

        <Checkbox
          label="Make this playlist private"
          checked={formData.isPrivate}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              isPrivate: e.target.checked,
            }))
          }
        />

        <div className="flex justify-end gap-3 pt-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" loading={loading}>
            {isEditMode ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default CreatePlaylistModal;