import { cn } from "cn"
import { Loader2, Save } from "lucide-react"

import { Button } from "@/shared/components/ui/button"

import { CATEGORY_FORM_ID } from "../constants"

interface CategoryFormSaveButtonProps {
  isSubmitting: boolean
  className?: string
}

export function CategoryFormSaveButton({
  isSubmitting,
  className,
}: CategoryFormSaveButtonProps) {
  const Icon = isSubmitting ? Loader2 : Save

  return (
    <Button
      type="submit"
      form={CATEGORY_FORM_ID}
      disabled={isSubmitting}
      className={cn("w-full gap-3 text-xs font-medium sm:w-38.5", className)}
    >
      <Icon className={cn("size-3.5", isSubmitting && "animate-spin")} />
      Guardar
    </Button>
  )
}
