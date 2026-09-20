import { useWatch } from "react-hook-form"

import { FormSwitch } from "@/shared/components/common/FormSwitch"
import { Label } from "@/shared/components/ui/label"

import { TERMS_URL_PREFIX } from "../constants"
import type { ContactFormValues } from "../schemas/contact-form.schema"
import { ContactFormInputField } from "./contact-form-input-field"

const CUSTOM_TERMS_LABEL = "Términos y condiciones personalizados"

const SwitchField = FormSwitch<ContactFormValues>

export function ContactFormTermsField() {
  const hasCustomTerms = useWatch<ContactFormValues, "hasCustomTerms">({
    name: "hasCustomTerms",
  })

  return (
    <div className="flex flex-col gap-3">
      <Label className="justify-between pr-6 text-xs font-medium">
        {CUSTOM_TERMS_LABEL}
        <SwitchField name="hasCustomTerms" label={CUSTOM_TERMS_LABEL} />
      </Label>
      {hasCustomTerms && (
        <ContactFormInputField
          name="termsUrl"
          label="Enlace de términos y condiciones"
          hideLabel
          placeholder="Añadir enlace"
          prefix={TERMS_URL_PREFIX}
        />
      )}
    </div>
  )
}
