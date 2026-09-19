"use client"

import { cn } from "cn"
import { ImageOff } from "lucide-react"
import Image, { type ImageProps } from "next/image"
import { useState } from "react"

import { Skeleton } from "@/shared/components/ui/skeleton"

type LoadStatus = "loading" | "loaded" | "error"

interface ImageWithSkeletonProps extends ImageProps {
  wrapperClassName?: string
}

export const ImageWithSkeleton = ({
  alt,
  className,
  wrapperClassName,
  onLoad,
  onError,
  ...props
}: ImageWithSkeletonProps) => {
  const [status, setStatus] = useState<LoadStatus>("loading")

  return (
    <div className={cn("relative shrink-0 overflow-hidden", wrapperClassName)}>
      {status === "loading" && (
        <Skeleton className="absolute inset-0 rounded-none" />
      )}
      {status === "error" && (
        <div
          role="img"
          aria-label={alt || "Imagen no disponible"}
          className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground"
        >
          <ImageOff className="size-1/2" />
        </div>
      )}
      <Image
        {...props}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-300",
          status !== "loaded" && "opacity-0",
          className,
        )}
        onLoad={(event) => {
          setStatus("loaded")
          onLoad?.(event)
        }}
        onError={(event) => {
          setStatus("error")
          onError?.(event)
        }}
      />
    </div>
  )
}
