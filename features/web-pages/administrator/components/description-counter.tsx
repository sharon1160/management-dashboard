import { useFormContext, useWatch } from "react-hook-form"

import type { CategoryFormValues } from "../schemas/category-form.schema"

interface DescriptionCounterProps {
  max: number
}

export function DescriptionCounter({ max }: DescriptionCounterProps) {
  const { control } = useFormContext<CategoryFormValues>()
  const description = useWatch({ control, name: "description" })

  return (
    <span className="self-end text-xs text-muted-foreground">
      {description.length}/{max}
    </span>
  )
}
