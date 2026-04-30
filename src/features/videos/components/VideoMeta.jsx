import React, { useState } from "react";
import { timeAgo } from "../../../utils/timeAgo";

function VideoMeta({
  title,
  views,
  createdAt,
  description,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="space-y-3">
      <h1 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">{title}</h1>

      <div className="rounded-2xl bg-white p-4 dark:bg-neutral-900">
        <p className="text-sm font-medium text-gray-700 dark:text-neutral-200">
          {views} views • {timeAgo(createdAt)}
        </p>

        {description && (
          <div className="mt-3">
            <p
              className={`text-sm leading-6 text-gray-600 dark:text-neutral-300 ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {description}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default VideoMeta;