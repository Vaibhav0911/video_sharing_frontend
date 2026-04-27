import React, { useState } from "react";
import { useLike } from "../useLike";
import LikesModal from "./LikesModal";
import { cn } from "../../../utils/cn";

function LikeButton({ targetType, targetId, showCount = true, className = "" }) {
  const [open, setOpen] = useState(false);

  const { isLiked, likeCount, likes, loading, toggleLike } = useLike(
    targetType,
    targetId
  );

  return (
    <>
      <div className="flex items-center overflow-hidden rounded-full bg-gray-100">
        <button
          onClick={toggleLike}
          disabled={loading}
          className={cn(
            "flex items-center gap-2 px-4 py-2 text-sm font-medium transition",
            isLiked
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-200",
            className
          )}
        >
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{isLiked ? "Liked" : "Like"}</span>
        </button>

        {showCount && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="border-l border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            {likeCount}
          </button>
        )}
      </div>

      <LikesModal
        isOpen={open}
        onClose={() => setOpen(false)}
        likes={likes}
        loading={loading}
      />
    </>
  );
}

export default LikeButton;