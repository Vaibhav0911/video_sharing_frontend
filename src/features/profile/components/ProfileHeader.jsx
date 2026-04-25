import React from "react";
import ImageUploadButton from "./ImageUploadButton";
import ProfileStats from "./ProfileStats";
import { SubscribeButton } from "../../subscriptions/components";

function ProfileHeader({
  profile,
  isOwner = false,
  profileImageLoading = false,
  coverImageLoading = false,
  onProfileImageChange,
  onCoverImageChange,
}) {
  if (!profile) return null;

  return (
    <section className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      <div className="relative h-48 w-full bg-neutral-800 md:h-64">
        {profile.coverimage && (
          <img
            src={profile.coverimage}
            alt="cover"
            className="h-full w-full object-cover"
          />
        )}

        {isOwner && (
          <div className="absolute right-4 top-4">
            <ImageUploadButton
              label="Change Cover"
              loading={coverImageLoading}
              onChange={onCoverImageChange}
            />
          </div>
        )}
      </div>

      <div className="relative px-5 pb-6 pt-16">
        <div className="absolute -top-14 left-5">
          <div className="relative">
            <img
              src={profile.profileimage}
              alt={profile.username}
              className="h-28 w-28 rounded-full border-4 border-neutral-950 object-cover"
            />

            {isOwner && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <ImageUploadButton
                  label="Edit"
                  loading={profileImageLoading}
                  onChange={onProfileImageChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {profile.fullname || profile.username}
            </h1>
            <p className="text-sm text-neutral-400">@{profile.username}</p>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300">
              {profile.email}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            {/* SUBSCRIBE BUTTON */}
            <SubscribeButton
              username={profile.username}
              isSubscribed={profile.isSubscribed}
              isOwner={isOwner}
            />

            {/* STATS */}
            <div className="w-full md:max-w-md">
              <ProfileStats
                subscribers={profile.subscriberCount}
                subscribedTo={profile.subscribedChannelsCount}
                videos={profile.videosCount}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
