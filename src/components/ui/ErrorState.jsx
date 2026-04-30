import React from "react";
import Button from "./Button";

function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred.",
  actionLabel = "Try Again",
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center dark:border-red-900 dark:bg-red-950">
      <h3 className="text-lg font-semibold text-red-700 dark:text-red-100">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-red-600 dark:text-red-200">{description}</p>

      {onAction && (
        <Button variant="danger" className="mt-4" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default ErrorState;