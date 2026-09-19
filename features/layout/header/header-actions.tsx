import { Button } from "@/shared/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip"
import type { HeaderAction } from "./types"

interface HeaderActionsProps {
  actions: HeaderAction[]
}

export function HeaderActions({ actions }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-1">
      {actions.map(({ id, label, icon: Icon }) => (
        <Tooltip key={id}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={label}
              className="cursor-pointer"
            >
              <Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
