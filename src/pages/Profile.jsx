import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {ProfileHeader, ProfileTabs, ProfileVideoGrid} from "../features/profile/components"

import {
  getChannelProfileThunk,
  getUserVideosThunk,
  updateCoverImageThunk,
  updateProfileImageThunk,
} from "../features/profile/profileThunk.js";

function Profile() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("videos");

  const { user } = useSelector((state) => state.auth);
  const { channelProfile, userVideos, loading, profileImageLoading, coverImageLoading, error } =
    useSelector((state) => state.profile);

  const isOwner = user?.username === username;

  useEffect(() => {
    if (username) {
      dispatch(getChannelProfileThunk(username));
      dispatch(getUserVideosThunk(username));
    }
  }, [dispatch, username]);

  const handleProfileImageChange = (file) => {
    dispatch(updateProfileImageThunk(file));
  };

  const handleCoverImageChange = (file) => {
    dispatch(updateCoverImageThunk(file));
  };

  if (loading) {
    return <div className="p-6 text-white">Loading profile...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-400">
        {error?.message || "Failed to load profile"}
      </div>
    );
  }

  return (
    <main className="space-y-6 p-4 md:p-6">
      <ProfileHeader
        profile={channelProfile}
        isOwner={isOwner}
        profileImageLoading={profileImageLoading}
        coverImageLoading={coverImageLoading}
        onProfileImageChange={handleProfileImageChange}
        onCoverImageChange={handleCoverImageChange}
      />

      <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "videos" && <ProfileVideoGrid videos={userVideos} />}

      {activeTab === "about" && (
        <section className="rounded-2xl bg-neutral-900 p-5">
          <h2 className="text-lg font-semibold text-white">About</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Username: @{channelProfile?.username}
          </p>
          <p className="mt-1 text-sm text-neutral-400">
            Email: {channelProfile?.email}
          </p>
        </section>
      )}
    </main>
  );
}

export default Profile;