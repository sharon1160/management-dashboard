import { cn } from "cn"
import { Save } from "lucide-react"

import { Button } from "@/shared/components/ui/button"

import { CATEGORY_FORM_ID } from "../constants"

interface CategoryFormSaveButtonProps {
  className?: string
}

export function CategoryFormSaveButton({
  className,
}: CategoryFormSaveButtonProps) {
  return (
    <Button
      type="submit"
      form={CATEGORY_FORM_ID}
      className={cn("w-full gap-3 text-xs font-medium sm:w-38.5", className)}
    >
      <Save className="size-3.5" />
      Guardar
    </Button>
  )
}
