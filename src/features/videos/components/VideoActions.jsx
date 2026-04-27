import React from "react";
import { Button } from "../../../components/ui";
import { LikeButton } from "../../likes/components"

function VideoActions({video}) {
  return (
    <div className="flex flex-wrap gap-3">
      
      {/* LIKE BUTTON */}
      <LikeButton
        targetType="videos"
        targetId={video._id}
      />

      {/* SHARE */}
      <Button variant="outline">Share</Button>

      {/* SAVE */}
      <Button variant="outline">Save</Button>
    </div>
  );
}

export default VideoActions;