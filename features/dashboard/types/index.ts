export type MetricTrend = "positive" | "negative"

export interface Metric {
  id: string
  label: string
  value: string
  change: string
  trend: MetricTrend
  changeLabel: string
}
