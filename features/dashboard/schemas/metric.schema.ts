import { z } from "zod"

export const metricSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  change: z.string(),
  trend: z.enum(["positive", "negative"]),
  changeLabel: z.string(),
})

export const metricsSchema = z.array(metricSchema)
