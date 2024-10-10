"use client"

// imports
import { Skeleton } from "./ui/skeleton"

export default function Loader() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-12 w-96" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-32" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="size-12 rounded-full" />
          <Skeleton className="h-5 w-80" />
        </div>
        <Skeleton className="h-5 w-96" />
        <Skeleton className="h-5 w-44" />
        <Skeleton className="h-5 w-16" />
      </div>
    </div>
  )
}
