import { salesHistorySchema } from "../schemas/sales-history.schema"
import salesHistoryData from "./sales-history.json"

export const SALES_HISTORY = salesHistorySchema.parse(salesHistoryData)
