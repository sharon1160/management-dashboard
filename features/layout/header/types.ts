import type { LucideIcon } from "lucide-react"

export interface HeaderUser {
  fullName: string
  firstName: string
  role: string
  avatarUrl?: string
}

export interface Language {
  code: string
  label: string
  flagSrc: string
}

export interface HeaderAction {
  id: string
  label: string
  icon: LucideIcon
}
