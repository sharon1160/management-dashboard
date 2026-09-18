import { LogOut, User } from "lucide-react"

import { DropdownMenuItem } from "@/shared/components/ui/dropdown-menu"
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
    <header className="flex h-17.5 border-b bg-background">
      <div className="flex flex-1 items-center justify-between gap-4 p-4.5">
        <HeaderGreeting userName={user.firstName} />
        <div className="flex items-center gap-2">
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
