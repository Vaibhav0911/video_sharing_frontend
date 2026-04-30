import React from "react";

function ProfileTabs({ activeTab, onChange }) {
  const tabs = [
    { label: "Videos", value: "videos" },
    { label: "About", value: "about" },
  ];

  return (
    <div className="flex gap-2 border-b border-gray-200 dark:border-neutral-800">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-4 py-3 text-sm font-medium ${
            activeTab === tab.value
              ? "border-b-2 border-blue-600 text-gray-900 dark:text-white"
              : "text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default ProfileTabs;