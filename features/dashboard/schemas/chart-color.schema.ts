import { z } from "zod"

/** Names of the `--chart-*` design tokens available to the dashboard charts */
export const chartColorSchema = z.enum([
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
])
