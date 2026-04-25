import React from "react";
import SubscribedChannelCard from "./SubscribedChannelCard";

function SubscribedChannelList({ channels = [] }) {
  return (
    <div className="space-y-3">
      {channels.map((channel) => (
        <SubscribedChannelCard key={channel._id} channel={channel} />
      ))}
    </div>
  );
}

export default SubscribedChannelList;