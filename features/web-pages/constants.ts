import type { WebPageCategory } from "./types"

export const PAGE_SIZE_OPTIONS = [5, 10, 20] as const

export const DEFAULT_PAGE_SIZE = 10

export const CATEGORY_CONFIG: Record<
  WebPageCategory,
  { label: string; badgeClassName: string }
> = {
  images: {
    label: "Imágenes",
    badgeClassName: "bg-warning text-warning-foreground",
  },
  document: {
    label: "Documento",
    badgeClassName: "bg-success text-success-foreground",
  },
  video: {
    label: "Videos",
    badgeClassName: "bg-info text-info-foreground",
  },
}
