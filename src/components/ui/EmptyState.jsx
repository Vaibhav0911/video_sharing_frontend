import React from "react";
import Button from "./Button";

function EmptyState({
  title = "No data found",
  description = "There is nothing to show here right now.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center dark:border-gray-600 dark:bg-dark-surface">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">{description}</p>

      {actionLabel && onAction && (
        <Button className="mt-4" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;