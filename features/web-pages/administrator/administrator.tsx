"use client"

import { FormProvider } from "react-hook-form"

import { SectionTitle } from "@/shared/components/common/SectionTitle"

import { CategoryFormFields } from "./components/category-form-fields"
import { CategoryFormSaveButton } from "./components/category-form-save-button"
import { DocumentsCard } from "./components/documents-card"
import { CATEGORY_FORM_ID } from "./constants"
import { useCategoryForm } from "./hooks/use-category-form"

export function Administrator() {
  const { form, onSubmit } = useCategoryForm()
  const { isSubmitting } = form.formState

  return (
    <div className="flex flex-1 flex-col gap-3 p-4 md:p-4.5 lg:min-h-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <SectionTitle as="h1">Nuevo formulario</SectionTitle>
          <p className="text-xs text-muted-foreground">
            Complete sus datos y continúe con los siguientes pasos.
          </p>
        </div>
        <CategoryFormSaveButton
          isSubmitting={isSubmitting}
          className="hidden sm:inline-flex"
        />
      </div>

      <FormProvider {...form}>
        <form
          id={CATEGORY_FORM_ID}
          onSubmit={onSubmit}
          noValidate
          className="grid gap-5 lg:min-h-0 lg:grid-cols-[2fr_1.3fr] lg:grid-rows-[minmax(0,auto)] lg:content-start"
        >
          <CategoryFormFields />
          <DocumentsCard />
        </form>
      </FormProvider>

      <CategoryFormSaveButton
        isSubmitting={isSubmitting}
        className="sm:hidden"
      />
    </div>
  )
}
