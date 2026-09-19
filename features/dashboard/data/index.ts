import { metricsSchema } from "../schemas/metric.schema"
import { referralsSchema } from "../schemas/referrals.schema"
import { salesBreakdownSchema } from "../schemas/sales-breakdown.schema"
import { salesHistorySchema } from "../schemas/sales-history.schema"
import metricsData from "./metrics.json"
import referralsData from "./referrals.json"
import salesBreakdownData from "./sales-breakdown.json"
import salesHistoryData from "./sales-history.json"

export const METRICS = metricsSchema.parse(metricsData)
export const SALES_HISTORY = salesHistorySchema.parse(salesHistoryData)
export const SALES_BREAKDOWN = salesBreakdownSchema.parse(salesBreakdownData)
export const REFERRALS = referralsSchema.parse(referralsData)
