import { Button, Modal } from "../../../components/ui";

function CommentDeleteModal({ isOpen, onClose, onConfirm, loading }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Comment">
      <div className="space-y-5">
        <p className="text-sm text-gray-600">
          Are you sure you want to delete this comment? This action cannot be
          undone.
        </p>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm} loading={loading}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CommentDeleteModal;