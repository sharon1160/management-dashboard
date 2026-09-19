import type { z } from "zod"

import type { chartColorSchema } from "../schemas/chart-color.schema"
import type { metricSchema } from "../schemas/metric.schema"
import type { referralSchema } from "../schemas/referrals.schema"
import type { salesBreakdownSchema } from "../schemas/sales-breakdown.schema"
import type { salesHistoryPointSchema } from "../schemas/sales-history.schema"

export type ChartColor = z.infer<typeof chartColorSchema>

export type Metric = z.infer<typeof metricSchema>

export type SalesHistoryPoint = z.infer<typeof salesHistoryPointSchema>

export type SalesBreakdown = z.infer<typeof salesBreakdownSchema>

export type Referral = z.infer<typeof referralSchema>
