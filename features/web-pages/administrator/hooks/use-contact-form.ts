import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { CONTACT_FORM_DEFAULTS } from "../data"
import {
  contactFormSchema,
  type ContactFormValues,
} from "../schemas/contact-form.schema"

const DEFAULT_VALUES: ContactFormValues = {
  name: "",
  fields: CONTACT_FORM_DEFAULTS.fields.map(({ id, visible, required }) => ({
    id,
    visible,
    required,
  })),
  thanksMessage: CONTACT_FORM_DEFAULTS.thanksMessage,
  hasCustomTerms: false,
  termsUrl: "",
}

export function useContactForm(
  onValid: (values: ContactFormValues) => Promise<void>,
) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const handleSubmit = form.handleSubmit(onValid)
  const reset = () => form.reset(DEFAULT_VALUES)

  return { form, handleSubmit, reset }
}
