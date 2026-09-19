import { useFormContext } from "react-hook-form"

import { FormField } from "@/shared/components/common/FormField"
import { FormInputField } from "@/shared/components/common/FormInputField"
import { FormSelectField } from "@/shared/components/common/FormSelectField"
import { Textarea } from "@/shared/components/ui/textarea"

import { MAX_DESCRIPTION_LENGTH } from "../constants"
import { CATEGORY_FORM_OPTIONS } from "../data"
import type { CategoryFormValues } from "../schemas/category-form.schema"
import { DescriptionCounter } from "./description-counter"
import { FormCard } from "./form-card"

const InputField = FormInputField<CategoryFormValues>
const SelectField = FormSelectField<CategoryFormValues>

export function CategoryFormFields() {
  const { register } = useFormContext<CategoryFormValues>()

  return (
    <FormCard>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          name="name"
          label="Nombre de categoría"
          placeholder="Introducir la categoría"
          required
        />
        <InputField
          name="secondaryName"
          label="Nombre de categoría"
          placeholder="Introducir la categoría"
          required
        />
      </div>

      <SelectField
        name="company"
        label="Empresa"
        options={CATEGORY_FORM_OPTIONS.companies}
        placeholder="Seleccionar una empresa"
        required
      />
      <SelectField
        name="companyType"
        label="Tipo de empresa"
        options={CATEGORY_FORM_OPTIONS.companyTypes}
        placeholder="Seleccionar tipo de empresa"
      />
      <SelectField
        name="secondaryCompanyType"
        label="Tipo de empresa"
        options={CATEGORY_FORM_OPTIONS.companyTypes}
        placeholder="Seleccionar tipo de empresa"
      />

      <FormField label="Descripción" className="lg:min-h-0">
        {(controlProps) => (
          <>
            <Textarea
              {...controlProps}
              placeholder="Escribe una descripción para la categoría"
              maxLength={MAX_DESCRIPTION_LENGTH}
              className="h-47.5 min-h-24 resize-none"
              {...register("description")}
            />
            <DescriptionCounter max={MAX_DESCRIPTION_LENGTH} />
          </>
        )}
      </FormField>
    </FormCard>
  )
}
