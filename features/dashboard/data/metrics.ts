import { metricsSchema } from "../schemas/metric.schema"
import metricsData from "./metrics.json"

export const METRICS = metricsSchema.parse(metricsData)
