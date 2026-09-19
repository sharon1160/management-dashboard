import { Controller, useFormContext } from "react-hook-form"

import { FileDropzone } from "@/shared/components/common/FileDropzone"

import { ACCEPTED_DOCUMENTS, MAX_DOCUMENTS } from "../constants"
import type { CategoryFormValues } from "../schemas/category-form.schema"
import { FormCard } from "./form-card"

export function DocumentsCard() {
  const { control } = useFormContext<CategoryFormValues>()

  return (
    <FormCard className="bg-surface-muted max-lg:min-h-72">
      <h2 className="text-xs font-medium">Documentos</h2>
      <Controller
        name="documents"
        control={control}
        render={({ field }) => (
          <FileDropzone
            files={field.value}
            accept={ACCEPTED_DOCUMENTS.accept}
            acceptLabel={ACCEPTED_DOCUMENTS.label}
            buttonLabel="Seleccionar archivos"
            hint={`o arrastra y suelta los ${ACCEPTED_DOCUMENTS.label} aquí`}
            maxFiles={MAX_DOCUMENTS}
            onChange={field.onChange}
          />
        )}
      />
    </FormCard>
  )
}
