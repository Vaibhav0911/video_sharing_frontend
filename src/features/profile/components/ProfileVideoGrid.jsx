import React from "react";
import ProfileVideoCard from "./ProfileVideoCard";

function ProfileVideoGrid({ videos = [] }) {
  if (!videos.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center dark:border-neutral-700 dark:bg-neutral-950">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No videos found</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          This channel has not uploaded any videos yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <ProfileVideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default ProfileVideoGrid;