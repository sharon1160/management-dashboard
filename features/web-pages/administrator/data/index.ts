import { categoryFormOptionsSchema } from "../schemas/category-form-options.schema"
import { contactFormDefaultsSchema } from "../schemas/contact-form-defaults.schema"
import categoryFormOptionsData from "./category-form-options.json"
import contactFormDefaultsData from "./contact-form-defaults.json"

export const CATEGORY_FORM_OPTIONS = categoryFormOptionsSchema.parse(
  categoryFormOptionsData,
)

export const CONTACT_FORM_DEFAULTS = contactFormDefaultsSchema.parse(
  contactFormDefaultsData,
)

export const CONTACT_FORM_FIELD_LABELS: Readonly<Record<string, string>> =
  Object.fromEntries(
    CONTACT_FORM_DEFAULTS.fields.map(({ id, label }) => [id, label]),
  )
