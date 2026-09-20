import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  categoryFormSchema,
  type CategoryFormValues,
} from "../schemas/category-form.schema"

export function useCategoryForm(onValid: (values: CategoryFormValues) => void) {
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

  const handleSubmit = form.handleSubmit(onValid)

  return { form, handleSubmit }
}
