import React from "react";

function ProfileStats({ subscribers = 0, subscribedTo = 0, videos = 0 }) {
  const stats = [
    { label: "Subscribers", value: subscribers },
    { label: "Subscribed", value: subscribedTo },
    { label: "Videos", value: videos },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{stat.value}</h3>
          <p className="text-xs text-gray-500 dark:text-neutral-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileStats;