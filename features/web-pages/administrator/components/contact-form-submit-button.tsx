import { Loader2 } from "lucide-react"

import { Button } from "@/shared/components/ui/button"

interface ContactFormSubmitButtonProps {
  isSubmitting: boolean
}

export function ContactFormSubmitButton({
  isSubmitting,
}: ContactFormSubmitButtonProps) {
  return (
    <Button type="submit" disabled={isSubmitting} className="px-10 text-xs">
      {isSubmitting && <Loader2 className="animate-spin" />}
      Crear formulario
    </Button>
  )
}
