import { z } from "zod"

import { getTermsUrlError } from "../utils/get-terms-url-error"

export const contactFieldSchema = z.object({
  id: z.string(),
  visible: z.boolean(),
  required: z.boolean(),
})

export const contactFormSchema = z
  .object({
    name: z.string().trim().min(1, "El nombre del formulario es obligatorio"),
    fields: z.array(contactFieldSchema),
    thanksMessage: z.string().trim(),
    hasCustomTerms: z.boolean(),
    termsUrl: z.string().trim(),
  })
  .superRefine(({ hasCustomTerms, termsUrl }, ctx) => {
    const message = hasCustomTerms ? getTermsUrlError(termsUrl) : null

    if (message) {
      ctx.addIssue({ code: "custom", path: ["termsUrl"], message })
    }
  })

export type ContactFormValues = z.infer<typeof contactFormSchema>
