import React from "react";
import { cn } from "../../utils/cn";

function SectionHeader({
  title,
  subtitle,
  action = null,
  className = "",
}) {
  return (
    <div className={cn("mb-4 flex items-center justify-between gap-4", className)}>
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}

export default SectionHeader;