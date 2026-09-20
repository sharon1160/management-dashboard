"use client"

import { FormProvider } from "react-hook-form"

import { Dialog, DialogContent } from "@/shared/components/ui/dialog"
import { ScrollArea } from "@/shared/components/ui/scroll-area"

import { CONTACT_FORM_ID } from "../constants"
import { useContactForm } from "../hooks/use-contact-form"
import type { ContactFormValues } from "../schemas/contact-form.schema"
import { ContactFormDialogHeader } from "./contact-form-dialog-header"
import { ContactFormFieldsTable } from "./contact-form-fields-table"
import { ContactFormInputField } from "./contact-form-input-field"
import { ContactFormSubmitButton } from "./contact-form-submit-button"
import { ContactFormTermsField } from "./contact-form-terms-field"

interface ContactFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreate: (values: ContactFormValues) => Promise<void>
}

export function ContactFormDialog({
  open,
  onOpenChange,
  onCreate,
}: ContactFormDialogProps) {
  const { form, handleSubmit, reset } = useContactForm(onCreate)
  const { isSubmitting } = form.formState

  const handleOpenChange = (nextOpen: boolean) => {
    if (isSubmitting) return
    if (!nextOpen) reset()
    onOpenChange(nextOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(100dvh-2rem)] min-h-88 flex-col gap-0 overflow-hidden p-0 sm:max-w-140"
      >
        <ContactFormDialogHeader />

        <FormProvider {...form}>
          <form
            id={CONTACT_FORM_ID}
            onSubmit={handleSubmit}
            noValidate
            className="flex min-h-0 flex-1 flex-col"
          >
            <ScrollArea
              type="always"
              className="flex min-h-0 flex-auto flex-col"
              viewportClassName="h-auto min-h-0 flex-1"
            >
              <div className="flex flex-col gap-5 px-4 pt-4 pb-5.5">
                <div className="mb-1 flex flex-col gap-4">
                  <ContactFormInputField
                    name="name"
                    label="Nombre de formulario"
                    required
                    placeholder="Introducir nombre del formulario"
                  />

                  <section className="flex flex-col gap-1">
                    <h3 className="text-xs font-semibold">Administrador</h3>
                    <p className="mb-2 text-[11px] text-muted-foreground">
                      Seleccione los campos que desea incluir en el formulario
                      de contacto.
                    </p>
                    <ContactFormFieldsTable />
                  </section>
                </div>

                <ContactFormInputField
                  name="thanksMessage"
                  label="Mensaje de agradecimiento"
                  placeholder="Introducir mensaje de agradecimiento"
                />

                <ContactFormTermsField />
              </div>
            </ScrollArea>

            <div className="flex shrink-0 justify-center px-4 pt-3 pb-7.5">
              <ContactFormSubmitButton isSubmitting={isSubmitting} />
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
