import React from "react";
import { cn } from "../../utils/cn";

function Checkbox({
  label,
  checked,
  onChange,
  className = "",
  disabled = false,
}) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 text-sm text-gray-700",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;