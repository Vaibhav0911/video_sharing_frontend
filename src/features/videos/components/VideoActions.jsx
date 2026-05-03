import React, { useState } from "react";
import { Button } from "../../../components/ui";
import { LikeButton } from "../../likes/components";
import AddToPlaylistModal from "../../playlists/components/AddToPlaylistModal";

function VideoActions({ video }) {
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/watch/${video._id}`;

    try {
      // ✅ 1. Use native share if available (mobile / modern browsers)
      if (navigator.share) {
        await navigator.share({
          title: video.title || "Check out this video",
          text: video.description || "",
          url,
        });

        return;
      }

      // ✅ 2. Clipboard API (secure context)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        // ✅ 3. Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      // ✅ 4. Show success feedback (replace with toast later)
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Share failed:", error);

      // ❗ Industry: always show user feedback
      alert("Failed to share. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {/* LIKE */}
        <LikeButton targetType="videos" targetId={video._id} />

        {/* SHARE */}
        <Button variant="outline" onClick={handleShare}>
          {copied ? "Copied!" : "Share"}
        </Button>

        {/* SAVE TO PLAYLIST */}
        <Button variant="outline" onClick={() => setOpenPlaylistModal(true)}>
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
