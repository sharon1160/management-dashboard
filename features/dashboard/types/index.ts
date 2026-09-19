import type { z } from "zod"

import type { metricSchema } from "../schemas/metric.schema"
import type { salesHistoryPointSchema } from "../schemas/sales-history.schema"

export type Metric = z.infer<typeof metricSchema>
export type MetricTrend = Metric["trend"]

export type SalesHistoryPoint = z.infer<typeof salesHistoryPointSchema>
