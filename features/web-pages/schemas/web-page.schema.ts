import { z } from "zod"

export const webPageCategorySchema = z.enum(["images", "document", "video"])

export const webPageSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  imageSeed: z.string(),
  createdAt: z.iso.datetime({ local: true }),
  category: webPageCategorySchema,
})

export const webPagesSchema = z.array(webPageSchema)
