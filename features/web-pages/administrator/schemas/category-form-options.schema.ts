import { z } from "zod"

const selectOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
})

export const categoryFormOptionsSchema = z.object({
  companies: z.array(selectOptionSchema),
  companyTypes: z.array(selectOptionSchema),
})
