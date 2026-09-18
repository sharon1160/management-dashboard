import { ChevronDown } from "lucide-react"
import type { ReactNode } from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar"
import { Button } from "@/shared/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import { getInitials } from "@/shared/utils/strings"
import type { HeaderUser } from "./types"

interface UserMenuProps {
  user: HeaderUser
  children: ReactNode
}

export function UserMenu({ user, children }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="group h-full cursor-pointer gap-3 rounded-none border-l-border border-l bg-sidebar px-6 py-4.5 text-left hover:bg-sidebar aria-expanded:bg-sidebar dark:hover:bg-sidebar"
        >
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.fullName} />
            <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user.fullName}</span>
            <span className="text-xs">{user.role}</span>
          </div>
          <ChevronDown className="ml-4 size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
