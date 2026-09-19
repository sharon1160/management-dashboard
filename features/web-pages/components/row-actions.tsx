import { Eye, Pencil, Trash2 } from "lucide-react"

import { Button } from "@/shared/components/ui/button"

const ACTIONS = [
  { label: "Editar", icon: Pencil },
  { label: "Ver", icon: Eye },
  { label: "Eliminar", icon: Trash2 },
]

export function RowActions({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {ACTIONS.map(({ label, icon: Icon }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon-sm"
          className="size-6.5"
          aria-label={`${label} ${title}`}
        >
          <Icon />
        </Button>
      ))}
    </div>
  )
}
