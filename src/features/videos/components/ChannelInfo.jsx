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
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-4 sm:flex-row sm:items-center sm:justify-between">
      <Link to={`/channel/${channelName}`} className="flex items-center gap-3">
        <Avatar
          src={channelAvatar}
          alt={channelName}
          name={channelName}
          size="lg"
        />

        <div>
          <h3 className="text-sm font-semibold text-white">@{channelName}</h3>
          <p className="text-sm text-neutral-400">
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
