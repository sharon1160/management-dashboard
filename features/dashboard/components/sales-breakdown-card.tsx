"use client"

import { Pie, PieChart } from "recharts"

import { type ChartConfig, ChartContainer } from "@/shared/components/ui/chart"

import type { SalesBreakdown } from "../types"
import { DashboardCard } from "./dashboard-card"

const DONUT_INNER_RADIUS = "58%"
const DONUT_START_ANGLE = 100

interface SalesBreakdownCardProps {
  data: SalesBreakdown
}

export function SalesBreakdownCard({ data }: SalesBreakdownCardProps) {
  const { distribution, periods } = data

  const chartConfig = Object.fromEntries(
    distribution.map(({ id, label, color }) => [
      id,
      { label, color: `var(--${color})` },
    ]),
  ) satisfies ChartConfig

  const segments = distribution.map((segment) => ({
    ...segment,
    fill: `var(--color-${segment.id})`,
  }))

  const description = distribution
    .map(({ label, value }) => `${label} ${value}%`)
    .join(", ")

  return (
    <DashboardCard className="items-center gap-6.5 sm:flex-row">
      <ChartContainer
        config={chartConfig}
        className="size-27 shrink-0"
        role="img"
        aria-label={`Distribución de ventas: ${description}`}
      >
        <PieChart
          accessibilityLayer={false}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Pie
            data={segments}
            dataKey="value"
            nameKey="id"
            innerRadius={DONUT_INNER_RADIUS}
            outerRadius="100%"
            startAngle={DONUT_START_ANGLE}
            endAngle={DONUT_START_ANGLE - 360}
            stroke="none"
          />
        </PieChart>
      </ChartContainer>
      <dl className="grid w-full flex-1 grid-cols-4 gap-x-8 gap-y-4">
        {periods.map(({ id, label, percentage, amount }) => (
          <div key={id} className="flex flex-col gap-1">
            <dt className="text-xs">{label}</dt>
            <dd className="text-sm font-bold">{percentage}%</dd>
            <dd className="text-[10px]">{amount}</dd>
          </div>
        ))}
      </dl>
    </DashboardCard>
  )
}
