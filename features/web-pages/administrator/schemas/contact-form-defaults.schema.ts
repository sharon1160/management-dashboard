import { z } from "zod"

import { contactFieldSchema } from "./contact-form.schema"

export const contactFormDefaultsSchema = z.object({
  thanksMessage: z.string(),
  fields: z.array(contactFieldSchema.extend({ label: z.string() })),
})
