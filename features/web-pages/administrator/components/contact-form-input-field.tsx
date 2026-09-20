import {
  FormInputField,
  type FormInputFieldProps,
} from "@/shared/components/common/FormInputField"

import type { ContactFormValues } from "../schemas/contact-form.schema"

type ContactFormInputFieldProps = Omit<
  FormInputFieldProps<ContactFormValues>,
  "className" | "inputClassName"
>

export function ContactFormInputField(props: ContactFormInputFieldProps) {
  return (
    <FormInputField<ContactFormValues>
      className="gap-0.5"
      inputClassName="text-xs md:text-xs"
      {...props}
    />
  )
}
