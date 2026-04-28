import { useState } from "react";
import { Avatar, Button } from "../../../components/ui";
import CommentForm from "./CommentForm";
import CommentDeleteModal from "./CommentDeleteModal";
import { timeAgo } from "../../../utils/timeAgo";

function CommentItem({
  comment,
  currentUserId,
  updating,
  deleting,
  onUpdate,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const owner = comment?.owner;
  const isOwner = currentUserId && owner?._id === currentUserId;

  const handleUpdate = async (content) => {
    await onUpdate({
      commentId: comment._id,
      content,
    });

    setIsEditing(false);
  };

  const handleDelete = async () => {
    await onDelete(comment._id);
    setDeleteOpen(false);
  };

  return (
    <div className="flex gap-3">
      <Avatar
        src={owner?.profileimage || owner?.avatar}
        name={owner?.username || owner?.fullname}
        size="md"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-gray-900">
            {owner?.username || "Unknown User"}
          </h4>

          {comment?.createdAt && (
            <span className="text-xs text-gray-500">
              {timeAgo(comment.createdAt)}
            </span>
          )}
        </div>

        {isEditing ? (
          <div className="mt-3">
            <CommentForm
              initialValue={comment.content}
              onSubmit={handleUpdate}
              loading={updating}
              buttonText="Update"
              onCancel={() => setIsEditing(false)}
            />
          </div>
        ) : (
          <p className="mt-1 whitespace-pre-line text-sm text-gray-700">
            {comment.content}
          </p>
        )}

        {isOwner && !isEditing && (
          <div className="mt-2 flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>

            <Button
              size="sm"
              variant="ghost"
              onClick={() => setDeleteOpen(true)}
              disabled={deleting}
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      <CommentDeleteModal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        loading={deleting}
      />
    </div>
  );
}

export default CommentItem;