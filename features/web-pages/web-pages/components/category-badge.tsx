import { cn } from "cn"

import { Badge } from "@/shared/components/ui/badge"

import { CATEGORY_CONFIG } from "../constants"
import type { WebPageCategory } from "../types"

export function CategoryBadge({ category }: { category: WebPageCategory }) {
  const { label, badgeClassName } = CATEGORY_CONFIG[category]

  return (
    <Badge
      className={cn(
        "h-6.5 w-19.5 rounded-md text-[11px] font-semibold",
        badgeClassName,
      )}
    >
      {label}
    </Badge>
  )
}
