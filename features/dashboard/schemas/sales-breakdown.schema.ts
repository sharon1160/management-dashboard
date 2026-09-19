import { z } from "zod"

import { chartColorSchema } from "./chart-color.schema"

const salesDistributionSegmentSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.number().nonnegative(),
  color: chartColorSchema,
})

const salesPeriodSchema = z.object({
  id: z.string(),
  label: z.string(),
  percentage: z.number().min(0).max(100),
  amount: z.string(),
})

export const salesBreakdownSchema = z.object({
  distribution: z.array(salesDistributionSegmentSchema),
  periods: z.array(salesPeriodSchema),
})
