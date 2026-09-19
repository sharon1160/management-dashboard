import { z } from "zod"

import { MAX_DESCRIPTION_LENGTH, MAX_DOCUMENTS } from "../constants"

export const categoryFormSchema = z.object({
  name: z.string().trim().min(1, "El nombre de la categoría es obligatorio"),
  secondaryName: z
    .string()
    .trim()
    .min(1, "El nombre de la categoría es obligatorio"),
  company: z.string().min(1, "Selecciona una empresa"),
  companyType: z.string(),
  secondaryCompanyType: z.string(),
  description: z
    .string()
    .max(MAX_DESCRIPTION_LENGTH, `Máximo ${MAX_DESCRIPTION_LENGTH} caracteres`),
  documents: z
    .array(z.instanceof(File))
    .max(MAX_DOCUMENTS, `Máximo ${MAX_DOCUMENTS} archivos`),
})

export type CategoryFormValues = z.infer<typeof categoryFormSchema>
