import { XIcon } from "lucide-react"

import { Button } from "@/shared/components/ui/button"
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog"

export function ContactFormDialogHeader() {
  return (
    <DialogHeader className="h-10.5 shrink-0 flex-row items-center justify-between border-b bg-surface-muted pr-2 pl-4">
      <DialogTitle className="text-sm font-bold text-primary">
        Formulario de contacto
      </DialogTitle>
      <DialogDescription className="sr-only">
        Configura los campos del formulario de contacto.
      </DialogDescription>
      <DialogClose asChild>
        <Button variant="ghost" size="icon-sm">
          <XIcon />
          <span className="sr-only">Cerrar</span>
        </Button>
      </DialogClose>
    </DialogHeader>
  )
}
