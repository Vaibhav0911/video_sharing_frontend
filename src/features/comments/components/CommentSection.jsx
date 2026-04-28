import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsThunk,
  addCommentThunk,
  updateCommentThunk,
  deleteCommentThunk,
} from "../commentThunk";
import { clearComments } from "../commentSlice";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { ErrorState, Loader } from "../../../components/ui";

function CommentSection({ videoId }) {
  const dispatch = useDispatch();

  const { comments, loading, creating, updating, deleting, error } =
    useSelector((state) => state.comments);

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (videoId) {
      dispatch(getCommentsThunk(videoId));
    }

    return () => {
      dispatch(clearComments());
    };
  }, [dispatch, videoId]);

  const handleAddComment = async (content) => {
    await dispatch(addCommentThunk({ videoId, content }));
  };

  const handleUpdateComment = async ({ commentId, content }) => {
    await dispatch(updateCommentThunk({ commentId, content }));
  };

  const handleDeleteComment = async (commentId) => {
    await dispatch(deleteCommentThunk(commentId));
  };

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Comments {comments?.length > 0 && `(${comments.length})`}
      </h2>

      {isAuthenticated ? (
        <CommentForm
          onSubmit={handleAddComment}
          loading={creating}
          placeholder="Add a comment..."
          buttonText="Comment"
        />
      ) : (
        <p className="mb-4 rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-600">
          Please login to add a comment.
        </p>
      )}

      {loading && (
        <div className="flex justify-center py-8">
          <Loader />
        </div>
      )}

      {!loading && error && (
        <ErrorState
          title="Failed to load comments"
          description={error?.message || error || "Please try again."}
        />
      )}

      {!loading && !error && (
        <CommentList
          comments={comments}
          currentUserId={user?._id}
          updating={updating}
          deleting={deleting}
          onUpdate={handleUpdateComment}
          onDelete={handleDeleteComment}
        />
      )}
    </section>
  );
}

export default CommentSection;