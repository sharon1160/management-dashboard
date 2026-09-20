import type { CategoryFormValues } from "../schemas/category-form.schema"
import type { ContactFormValues } from "../schemas/contact-form.schema"

type ContactFormPayload = Omit<
  ContactFormValues,
  "hasCustomTerms" | "termsUrl"
> & {
  termsUrl: string | null
}

export interface CreateContactFormPayload {
  category: CategoryFormValues
  contactForm: ContactFormPayload
}
