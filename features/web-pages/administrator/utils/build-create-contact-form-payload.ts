import { TERMS_URL_PREFIX } from "../constants"
import type { CategoryFormValues } from "../schemas/category-form.schema"
import type { ContactFormValues } from "../schemas/contact-form.schema"
import type { CreateContactFormPayload } from "../types"

export function buildCreateContactFormPayload(
  category: CategoryFormValues,
  contactForm: ContactFormValues,
): CreateContactFormPayload {
  const { hasCustomTerms, termsUrl, ...contactFields } = contactForm

  return {
    category,
    contactForm: {
      ...contactFields,
      termsUrl: hasCustomTerms ? `${TERMS_URL_PREFIX}${termsUrl}` : null,
    },
  }
}
