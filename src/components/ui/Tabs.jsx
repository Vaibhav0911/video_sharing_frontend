import React from "react";
import { cn } from "../../utils/cn";

export function Tabs({ tabs = [], activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-xl bg-gray-100 p-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition",
              isActive
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}