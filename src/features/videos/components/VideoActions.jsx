import React, { useState } from "react";
import { Button } from "../../../components/ui";
import { LikeButton } from "../../likes/components";
import AddToPlaylistModal from "../../playlists/components/AddToPlaylistModal";

function VideoActions({ video }) {
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      const url = `${window.location.origin}/watch/${video._id}`;

      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        
        {/* LIKE */}
        <LikeButton
          targetType="videos"
          targetId={video._id}
        />

        {/* SHARE */}
        <Button variant="outline" onClick={handleShare}>
          {copied ? "Copied!" : "Share"}
        </Button>

        {/* SAVE TO PLAYLIST */}
        <Button
          variant="outline"
          onClick={() => setOpenPlaylistModal(true)}
        >
          Save
        </Button>
      </div>

      {/* PLAYLIST MODAL */}
      <AddToPlaylistModal
        isOpen={openPlaylistModal}
        onClose={() => setOpenPlaylistModal(false)}
        videoId={video._id}
      />
    </>
  );
}

export default VideoActions;