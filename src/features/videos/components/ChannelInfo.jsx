import React from "react";
import { Avatar, Button } from "../../../components/ui";
import { Link } from "react-router-dom";

function ChannelInfo({
  channelName,
  channelAvatar,
  subscribers = 0,
  isSubscribed = false,
  isOwner = false,
  onSubscribe,
  loading = false,
}) {
  if (!channelName) return null;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900">
      <Link to={`/channel/${channelName}`} className="flex items-center gap-3">
        <Avatar
          src={channelAvatar}
          alt={channelName}
          name={channelName}
          size="lg"
        />

        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">@{channelName}</h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            {subscribers || 0} subscribers
          </p>
        </div>
      </Link>

      {!isOwner && (
        <Button
          onClick={onSubscribe}
          disabled={loading}
          variant={isSubscribed ? "secondary" : "primary"}
        >
          {loading
            ? "Please wait..."
            : isSubscribed
              ? "Subscribed"
              : "Subscribe"}
        </Button>
      )}
    </div>
  );
}

export default ChannelInfo;
