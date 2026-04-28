import { useState } from "react";
import { Button, Textarea } from "../../../components/ui";

function CommentForm({
  initialValue = "",
  onSubmit,
  loading = false,
  placeholder = "Write your comment...",
  buttonText = "Submit",
  onCancel,
}) {
  const [content, setContent] = useState(initialValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedContent = content.trim();
    if (!trimmedContent) return;

    await onSubmit(trimmedContent);

    if (!initialValue) {
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        rows={3}
      />

      <div className="flex justify-end gap-2">
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          loading={loading}
          disabled={!content.trim() || loading}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

export default CommentForm;