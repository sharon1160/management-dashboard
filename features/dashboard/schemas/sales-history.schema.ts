import { z } from "zod"

/** Local ISO datetime without seconds or offset, e.g. "2024-04-15T06:00" */
const LOCAL_DATETIME_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/

export const salesHistoryPointSchema = z.object({
  date: z.string().regex(LOCAL_DATETIME_REGEX),
  freeGb: z.number(),
})

export const salesHistorySchema = z.array(salesHistoryPointSchema)
