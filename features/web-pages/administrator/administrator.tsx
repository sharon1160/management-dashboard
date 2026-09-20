"use client"

import { useState } from "react"
import { FormProvider } from "react-hook-form"

import { SectionTitle } from "@/shared/components/common/SectionTitle"

import { CategoryFormFields } from "./components/category-form-fields"
import { CategoryFormSaveButton } from "./components/category-form-save-button"
import { ContactFormDialog } from "./components/contact-form-dialog"
import { DocumentsCard } from "./components/documents-card"
import { CATEGORY_FORM_ID } from "./constants"
import { useCategoryForm } from "./hooks/use-category-form"
import { useCreateContactForm } from "./hooks/use-create-contact-form"
import type { ContactFormValues } from "./schemas/contact-form.schema"

export function Administrator() {
  const [isContactDialogOpen, setContactDialogOpen] = useState(false)
  const { form, handleSubmit } = useCategoryForm(() =>
    setContactDialogOpen(true),
  )
  const { createContactForm } = useCreateContactForm()

  const handleCreate = (contactForm: ContactFormValues) =>
    createContactForm(form.getValues(), contactForm)

  return (
    <div className="flex flex-1 flex-col gap-3 p-4 md:p-4.5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <SectionTitle as="h1">Nuevo formulario</SectionTitle>
          <p className="text-xs text-muted-foreground">
            Complete sus datos y continúe con los siguientes pasos.
          </p>
        </div>
        <CategoryFormSaveButton className="hidden sm:inline-flex" />
      </div>

      <FormProvider {...form}>
        <form
          id={CATEGORY_FORM_ID}
          onSubmit={handleSubmit}
          noValidate
          className="grid gap-5 lg:grid-cols-[2fr_1.3fr] lg:content-start"
        >
          <CategoryFormFields />
          <DocumentsCard />
        </form>
      </FormProvider>

      <CategoryFormSaveButton className="sm:hidden" />

      <ContactFormDialog
        open={isContactDialogOpen}
        onOpenChange={setContactDialogOpen}
        onCreate={handleCreate}
      />
    </div>
  )
}
