import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Modal, EmptyState, Loader } from "../../../components/ui";
import {
  getUserPlaylistsThunk,
  addVideoToPlaylistThunk,
} from "../playlistThunk";

function AddToPlaylistModal({ isOpen, onClose, videoId }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { playlists, loading, addVideoLoading } = useSelector(
    (state) => state.playlists
  );

  useEffect(() => {
    if (isOpen && user?._id) {
      dispatch(getUserPlaylistsThunk(user._id));
    }
  }, [dispatch, isOpen, user?._id]);

  const handleAddVideo = async (playlistId) => {
    await dispatch(
      addVideoToPlaylistThunk({
        playlistId,
        videoId,
      })
    ).unwrap();

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Save to Playlist">
      {loading ? (
        <div className="flex justify-center py-10">
          <Loader />
        </div>
      ) : !playlists.length ? (
        <EmptyState
          title="No playlist found"
          description="Create a playlist first to save this video."
        />
      ) : (
        <div className="space-y-3">
          {playlists.map((playlist) => {
            const alreadyAdded = playlist?.videos?.some(
              (video) => video?._id === videoId || video === videoId
            );

            return (
              <div
                key={playlist._id}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
              >
                <div>
                  <h4 className="font-medium text-gray-900">
                    {playlist.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {playlist?.videos?.length || 0} videos
                  </p>
                </div>

                <Button
                  size="sm"
                  variant={alreadyAdded ? "outline" : "primary"}
                  disabled={alreadyAdded || addVideoLoading}
                  onClick={() => handleAddVideo(playlist._id)}
                >
                  {alreadyAdded ? "Added" : "Add"}
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </Modal>
  );
}

export default AddToPlaylistModal;