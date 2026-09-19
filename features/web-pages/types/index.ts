import type { z } from "zod"

import type {
  webPageCategorySchema,
  webPageSchema,
} from "../schemas/web-page.schema"

export type WebPageCategory = z.infer<typeof webPageCategorySchema>

export type WebPage = z.infer<typeof webPageSchema>

export type CheckedState = boolean | "indeterminate"
