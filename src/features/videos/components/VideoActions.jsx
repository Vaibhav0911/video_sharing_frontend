import React from "react";
import { Button } from "../../../components/ui";

function VideoActions({
  onLike,
  onShare,
  onSave,
  liked = false,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant={liked ? "secondary" : "outline"} onClick={onLike}>
        {liked ? "Liked" : "Like"}
      </Button>

      <Button variant="outline" onClick={onShare}>
        Share
      </Button>

      <Button variant="outline" onClick={onSave}>
        Save
      </Button>
    </div>
  );
}

export default VideoActions;