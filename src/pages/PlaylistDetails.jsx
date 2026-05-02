import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";

import { Button, EmptyState, Loader } from "../components/ui";
import { VideoCard } from "../features/videos/components";
import { CreatePlaylistModal, DeletePlaylistModel } from "../features/playlists/components";

import {
  deletePlaylistThunk,
  getPlaylistByIdThunk,
  removeVideoFromPlaylistThunk,
} from "../features/playlists/playlistThunk";

function PlaylistDetails() {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { currentPlaylist, loading, deleteLoading, removeVideoLoading } =
    useSelector((state) => state.playlists);

  useEffect(() => {
    if (playlistId) {
      dispatch(getPlaylistByIdThunk(playlistId));
    }
  }, [dispatch, playlistId]);

  const handleDeletePlaylist = async () => {
    await dispatch(deletePlaylistThunk(playlistId)).unwrap();
    navigate("/playlists");
  };

  const handleRemoveVideo = async (videoId) => {
    await dispatch(
      removeVideoFromPlaylistThunk({
        playlistId,
        videoId,
      })
    ).unwrap();
  };

  if (loading) {
    return (
      <div className="flex min-h-80 items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!currentPlaylist) {
    return (
      <div className="p-4 md:p-6">
        <EmptyState
          title="Playlist not found"
          description="The playlist you are looking for does not exist."
        />
      </div>
    );
  }

  return (
    <section className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {currentPlaylist.name}
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            {currentPlaylist.description || "No description"}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            {currentPlaylist?.videos?.length || 0} videos
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            leftIcon={<Edit className="h-4 w-4" />}
            onClick={() => setOpenEditModal(true)}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            loading={deleteLoading}
            leftIcon={<Trash2 className="h-4 w-4" />}
            onClick={() => setOpenDeleteModal(true) }
          >
            Delete
          </Button>
        </div>
      </div>

      {!currentPlaylist?.videos?.length ? (
        <EmptyState
          title="No videos in this playlist"
          description="Add videos to this playlist from the video watch page."
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentPlaylist.videos.map((video) => (
            <div key={video._id} className="space-y-2">
              <VideoCard video={video} />

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                loading={removeVideoLoading}
                onClick={() => handleRemoveVideo(video._id)}
              >
                Remove from playlist
              </Button>
            </div>
          ))}
        </div>
      )}

      <CreatePlaylistModal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
        mode="edit"
        playlist={currentPlaylist}
      />

      <DeletePlaylistModel
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={handleDeletePlaylist}
        loading={deleteLoading}
        playlistName={currentPlaylist?.name}
      />
    </section>
  );
}

export default PlaylistDetails;
