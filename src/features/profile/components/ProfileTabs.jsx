import React from "react";

function ProfileTabs({ activeTab, onChange }) {
  const tabs = [
    { label: "Videos", value: "videos" },
    { label: "About", value: "about" },
  ];

  return (
    <div className="flex gap-2 border-b border-neutral-800">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-4 py-3 text-sm font-medium ${
            activeTab === tab.value
              ? "border-b-2 border-white text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default ProfileTabs;