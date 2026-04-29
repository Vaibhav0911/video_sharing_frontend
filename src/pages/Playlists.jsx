import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../components/ui";
import { PlaylistGrid, CreatePlaylistModal } from "../features/playlists/components"
import { getUserPlaylistsThunk } from "../features/playlists/playlistThunk";

function Playlists() {
  const dispatch = useDispatch();

  const [openCreateModal, setOpenCreateModal] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { playlists, loading } = useSelector((state) => state.playlists);

  useEffect(() => {
    if (user?._id) {
      dispatch(getUserPlaylistsThunk(user._id));
    }
  }, [dispatch, user?._id]);

  return (
    <section className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Your Playlists</h1>
          <p className="text-sm text-gray-600">
            Manage and organize your saved videos.
          </p>
        </div>

        <Button onClick={() => setOpenCreateModal(true)}>
          Create Playlist
        </Button>
      </div>

      <PlaylistGrid
        playlists={playlists}
        loading={loading}
        onCreateClick={() => setOpenCreateModal(true)}
      />

      <CreatePlaylistModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
      />
    </section>
  );
}

export default Playlists;