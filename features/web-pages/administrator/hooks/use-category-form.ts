import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { AppRoutes } from "@/shared/constants/routes-enum"

import {
  categoryFormSchema,
  type CategoryFormValues,
} from "../schemas/category-form.schema"

const SIMULATED_SAVE_DELAY_MS = 1000

export function useCategoryForm() {
  const router = useRouter()
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: "",
      secondaryName: "",
      company: "",
      companyType: "",
      secondaryCompanyType: "",
      description: "",
      documents: [],
    },
  })

  const onSubmit = form.handleSubmit(async () => {
    try {
      // TODO: replace with the real create-category mutation once the backend is ready
      await new Promise((resolve) =>
        setTimeout(resolve, SIMULATED_SAVE_DELAY_MS),
      )
      toast.success("Categoría guardada correctamente")
      router.push(AppRoutes.PAGINAS_WEBS)
    } catch (error) {
      console.error("Error saving category:", error)
      toast.error("Hubo un error al guardar la categoría")
    }
  })

  return { form, onSubmit }
}
