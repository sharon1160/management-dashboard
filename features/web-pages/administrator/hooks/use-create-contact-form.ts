import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { AppRoutes } from "@/shared/constants/routes-enum"

import type { CategoryFormValues } from "../schemas/category-form.schema"
import type { ContactFormValues } from "../schemas/contact-form.schema"
import type { CreateContactFormPayload } from "../types"
import { buildCreateContactFormPayload } from "../utils/build-create-contact-form-payload"

const SIMULATED_SAVE_DELAY_MS = 1000

// TODO: replace with the real request once the backend is ready
// category.documents holds File objects, so send it as multipart FormData, not JSON
function createContactFormRequest(payload: CreateContactFormPayload) {
  return new Promise<CreateContactFormPayload>((resolve) =>
    setTimeout(() => resolve(payload), SIMULATED_SAVE_DELAY_MS),
  )
}

export function useCreateContactForm() {
  const router = useRouter()

  const createContactForm = async (
    category: CategoryFormValues,
    contactForm: ContactFormValues,
  ) => {
    try {
      await createContactFormRequest(
        buildCreateContactFormPayload(category, contactForm),
      )
      toast.success("Formulario creado correctamente")
      router.push(AppRoutes.PAGINAS_WEBS)
    } catch (error) {
      console.error("Error creating contact form:", error)
      toast.error("Hubo un error al crear el formulario")
    }
  }

  return { createContactForm }
}
