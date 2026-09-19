import { Progress } from "@/shared/components/ui/progress"

import type { ChartColor, Referral } from "../types"
import { DashboardCard } from "./dashboard-card"
import { cn } from "cn"

const INDICATOR_COLOR: Record<ChartColor, string> = {
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
}

interface ReferralsCardProps {
  referrals: Referral[]
}

export function ReferralsCard({ referrals }: ReferralsCardProps) {
  return (
    <DashboardCard className="justify-center gap-5.5">
      {referrals.map(({ id, count, label, channel, percentage, color }) => (
        <div key={id} className="flex flex-col gap-0.5">
          <p className="text-sm leading-tight font-bold">{count}</p>
          <div className="flex items-center justify-between text-[10px] leading-tight">
            <span>{label}</span>
            <span>{percentage}%</span>
          </div>
          <Progress
            className="h-2.5"
            value={percentage}
            aria-label={`${label} de ${channel}: ${percentage}%`}
            indicatorClassName={cn("rounded-none", INDICATOR_COLOR[color])}
          />
        </div>
      ))}
    </DashboardCard>
  )
}
