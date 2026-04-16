import React from "react";
import { cn } from "../../utils/cn";

function Skeleton({ className = "" }) {
  return <div className={cn("animate-pulse rounded-xl bg-gray-200", className)} />;
}

export default Skeleton;