import { Card, CardContent } from "@/shared/components/ui/card"
import { cn } from "@/shared/utils/styles"

import type { Metric } from "../types"

const TREND_STYLES = {
  positive: "bg-success text-success-foreground",
  negative: "bg-destructive text-destructive-foreground",
} as const

interface MetricCardProps {
  metric: Metric
}

export function MetricCard({ metric }: MetricCardProps) {
  const { label, value, change, trend, changeLabel } = metric

  return (
    <Card size="sm" className="gap-2 py-3">
      <CardContent className="gap-1 px-4.5">
        <p className="text-xs">{label}</p>
        <p className="text-sm font-bold">{value}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className={cn(
              "rounded p-1 text-[11px] font-semibold",
              TREND_STYLES[trend],
            )}
          >
            {change}
          </span>
          <span className="text-[10px]">{changeLabel}</span>
        </div>
      </CardContent>
    </Card>
  )
}
