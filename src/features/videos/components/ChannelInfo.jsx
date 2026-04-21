import React from "react";
import { Avatar, Button } from "../../../components/ui";

function ChannelInfo({
  channelName,
  channelAvatar,
  subscribers,
  onSubscribe,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <Avatar
          src={channelAvatar}
          alt={channelName}
          name={channelName}
          size="lg"
        />

        <div>
          <h3 className="text-sm font-semibold text-white">{channelName}</h3>
          <p className="text-sm text-neutral-400">{subscribers} subscribers</p>
        </div>
      </div>

      <Button onClick={onSubscribe}>Subscribe</Button>
    </div>
  );
}

export default ChannelInfo;