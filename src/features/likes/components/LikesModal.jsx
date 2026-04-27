import React from "react";
import { Modal, Avatar, Loader, EmptyState } from "../../../components/ui";
import { timeAgo } from "../../../utils/timeAgo";

function LikesModal({ isOpen, onClose, likes = [], loading = false }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Liked by">
      {loading ? (
        <div className="flex justify-center py-8">
          <Loader />
        </div>
      ) : likes.length === 0 ? (
        <EmptyState
          title="No likes yet"
          description="Be the first one to like this."
        />
      ) : (
        <div className="max-h-96 space-y-3 overflow-y-auto">
          {likes.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between rounded-xl p-2 hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <Avatar
                  src={user.profileimage}
                  name={user.username}
                  size="md"
                />

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {user.username}
                  </p>

                  <p className="text-xs text-gray-500">
                    {timeAgo(user.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}

export default LikesModal;