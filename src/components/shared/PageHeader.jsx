import React from "react";
import { cn } from "../../utils/cn";

function PageHeader({
  title,
  description,
  action = null,
  className = "",
}) {
  return (
    <div className={cn("flex flex-col gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:items-end sm:justify-between dark:border-gray-700", className)}>
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-dark-text">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}

export default PageHeader;