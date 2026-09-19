import { LogOut, Menu, User } from "lucide-react"

import { DropdownMenuItem } from "@/shared/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/shared/components/ui/sidebar"
import { HEADER_ACTIONS, DEFAULT_LANGUAGE_CODE, LANGUAGES } from "./constants"
import { HeaderActions } from "./header-actions"
import { HeaderGreeting } from "./header-greeting"
import { LanguageSelector } from "./language-selector"
import type { HeaderUser } from "./types"
import { UserMenu } from "./user-menu"

interface AppHeaderProps {
  user: HeaderUser
}

export function AppHeader({ user }: AppHeaderProps) {
  return (
    <header className="@container sticky top-0 z-10 flex h-17.5 border-b bg-background">
      <div className="flex min-w-0 flex-1 items-center justify-between gap-4 p-4.5">
        <div className="flex min-w-0 items-center gap-3">
          <SidebarTrigger className="md:hidden">
            <Menu />
          </SidebarTrigger>
          <HeaderGreeting userName={user.firstName} />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSelector
            languages={LANGUAGES}
            defaultValue={DEFAULT_LANGUAGE_CODE}
          />
          <HeaderActions actions={HEADER_ACTIONS} />
        </div>
      </div>
      <UserMenu user={user}>
        <DropdownMenuItem className="text-xs">
          <User />
          Mi perfil
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive" className="text-xs">
          <LogOut />
          Cerrar sesión
        </DropdownMenuItem>
      </UserMenu>
    </header>
  )
}
