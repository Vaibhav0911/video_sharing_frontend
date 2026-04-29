import { Link } from "react-router-dom";
import { Lock, ListVideo } from "lucide-react";
import { Card, CardContent, Badge } from "../../../components/ui";

function PlaylistCard({ playlist }) {
  const firstVideo = playlist?.videos?.[0];

  return (
    <Link to={`/playlists/${playlist._id}`}>
      <Card className="overflow-hidden transition hover:shadow-md">
        <div className="relative aspect-video bg-gray-100">
          {firstVideo?.thumbnail ? (
            <img
              src={firstVideo.thumbnail}
              alt={playlist.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <ListVideo className="h-10 w-10 text-gray-400" />
            </div>
          )}

          <div className="absolute bottom-2 right-2 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">
            {playlist?.videos?.length || 0} videos
          </div>
        </div>

        <CardContent className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="line-clamp-1 font-semibold text-gray-900">
              {playlist.name}
            </h3>

            {playlist.isPrivate && (
              <Badge variant="default">
                <Lock className="mr-1 h-3 w-3" />
                Private
              </Badge>
            )}
          </div>

          <p className="line-clamp-2 text-sm text-gray-600">
            {playlist.description || "No description"}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PlaylistCard;