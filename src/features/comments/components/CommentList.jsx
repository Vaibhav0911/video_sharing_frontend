import CommentItem from "./CommentItem";
import { EmptyState } from "../../../components/ui";

function CommentList({
  comments = [],
  currentUserId,
  updating,
  deleting,
  onUpdate,
  onDelete,
}) {
  if (!comments.length) {
    return (
      <EmptyState
        title="No comments yet"
        description="Be the first person to comment on this video."
      />
    );
  }

  return (
    <div className="space-y-5">
      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          currentUserId={currentUserId}
          updating={updating}
          deleting={deleting}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CommentList;