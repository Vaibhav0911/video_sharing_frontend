import PlaylistCard from "./PlaylistCard";
import { EmptyState, Loader } from "../../../components/ui";

function PlaylistGrid({ playlists = [], loading = false, onCreateClick }) {
  if (loading) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!playlists.length) {
    return (
      <EmptyState
        title="No playlists yet"
        description="Create your first playlist and organize your favorite videos."
        actionLabel="Create Playlist"
        onAction={onCreateClick}
      />
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist._id} playlist={playlist} />
      ))}
    </div>
  );
}

export default PlaylistGrid;