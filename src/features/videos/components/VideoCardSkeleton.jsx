import React from "react";
import { Skeleton } from "../../../components/ui";

function VideoCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-video w-full rounded-xl" />
      <div className="flex gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-7/12" />
          <Skeleton className="h-3 w-5/12" />
        </div>
      </div>
    </div>
  );
}

export default VideoCardSkeleton;