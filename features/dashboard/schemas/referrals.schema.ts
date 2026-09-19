import { z } from "zod"

import { chartColorSchema } from "./chart-color.schema"

export const referralSchema = z.object({
  id: z.string(),
  count: z.number().int().nonnegative(),
  label: z.string(),
  channel: z.string(),
  percentage: z.number().min(0).max(100),
  color: chartColorSchema,
})

export const referralsSchema = z.array(referralSchema)
