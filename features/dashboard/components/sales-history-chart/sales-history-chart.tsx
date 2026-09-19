"use client"

import { useId } from "react"
import { Area, AreaChart, XAxis, YAxis } from "recharts"

import { Card, CardContent } from "@/shared/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui/chart"
import { ScrollArea, ScrollBar } from "@/shared/components/ui/scroll-area"

import type { SalesHistoryPoint } from "../../types"
import { getWeekdayLabels } from "../../utils/weekdays"
import { AxisLabels } from "./components/axis-labels"
import {
  CHART_HEIGHT,
  CHART_MARGIN_TOP,
  LEFT_AXIS_LABELS,
  LEFT_AXIS_TITLE,
  RIGHT_AXIS_LABELS,
  RIGHT_AXIS_TITLE,
  Y_DOMAIN,
} from "./constants"
import { DayLabels } from "./components/day-labels"
import { SalesGradient } from "./components/sales-gradient"

const chartConfig = {
  freeGb: { label: LEFT_AXIS_TITLE, color: "var(--chart-sales)" },
} satisfies ChartConfig

interface SalesHistoryChartProps {
  data: SalesHistoryPoint[]
}

export function SalesHistoryChart({ data }: SalesHistoryChartProps) {
  const gradientId = useId()
  const dayLabels = getWeekdayLabels(data)

  return (
    <Card size="sm" className="px-4.5 pt-4.5 pb-3.75">
      <CardContent className="flex flex-col gap-1 px-0">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span>{LEFT_AXIS_TITLE}</span>
          <span>{RIGHT_AXIS_TITLE}</span>
        </div>
        <div className="flex gap-3">
          <AxisLabels labels={LEFT_AXIS_LABELS} />
          <ScrollArea
            type="always"
            role="region"
            aria-label="Historial de ventas por día"
            className="min-w-0 flex-1"
          >
            <div className="flex min-w-150 flex-col gap-2 pb-5">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto w-full justify-start"
                style={{ height: CHART_HEIGHT }}
              >
                <AreaChart
                  accessibilityLayer
                  data={data}
                  margin={{ left: 0, right: 0, top: CHART_MARGIN_TOP }}
                >
                  <SalesGradient id={gradientId} />
                  <XAxis dataKey="date" hide />
                  <YAxis hide domain={Y_DOMAIN} />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Area
                    dataKey="freeGb"
                    type="linear"
                    stroke="var(--color-freeGb)"
                    strokeWidth={2}
                    fill={`url(#${gradientId})`}
                  />
                </AreaChart>
              </ChartContainer>
              <DayLabels labels={dayLabels} />
            </div>
            <ScrollBar orientation="horizontal" className="h-2 bg-secondary" />
          </ScrollArea>
          <AxisLabels labels={RIGHT_AXIS_LABELS} align="right" />
        </div>
      </CardContent>
    </Card>
  )
}
