import React, { useState } from "react";

function VideoMeta({
  title,
  views,
  createdAt,
  description,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="space-y-3">
      <h1 className="text-xl font-bold text-white sm:text-2xl">{title}</h1>

      <div className="rounded-2xl bg-neutral-900 p-4">
        <p className="text-sm font-medium text-neutral-200">
          {views} views • {createdAt}
        </p>

        {description && (
          <div className="mt-3">
            <p
              className={`text-sm leading-6 text-neutral-300 ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {description}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 text-sm font-medium text-white hover:text-neutral-300"
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