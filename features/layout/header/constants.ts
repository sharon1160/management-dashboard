import { Bell, LayoutGrid, Settings } from "lucide-react"

import type { HeaderAction, Language } from "./types"

export const LANGUAGES: Language[] = [
  { code: "es", label: "Español", flagSrc: "/flags/es.svg" },
  { code: "en", label: "English", flagSrc: "/flags/us.svg" },
]

export const DEFAULT_LANGUAGE_CODE = "es"

export const HEADER_ACTIONS: HeaderAction[] = [
  { id: "apps", label: "Aplicaciones", icon: LayoutGrid },
  { id: "notifications", label: "Notificaciones", icon: Bell },
  { id: "settings", label: "Configuración", icon: Settings },
]
