"use client"

import {
  ClipboardCheck,
  LayoutDashboard,
  Monitor,
  Server,
  TabletSmartphone,
} from "lucide-react"

import { cn } from "cn"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/shared/components/ui/sidebar"
import { AppRoutes } from "@/shared/constants/routes-enum"
import { AppSidebarHeader } from "./app-sidebar-header"
import { NavMain, type NavItem } from "./nav-main"

const sidebarSlotPaddingX =
  "px-4 transition-[padding] duration-200 ease-linear group-data-[collapsible=icon]:px-[calc((var(--sidebar-width-icon)_-_1px_-_2rem)_/_2)]"

const navItems: NavItem[] = [
  { title: "Dashboard", href: AppRoutes.DASHBOARD, icon: LayoutDashboard },
  {
    title: "Productos",
    href: AppRoutes.PRODUCTOS,
    icon: ClipboardCheck,
    items: [
      { title: "Todos los productos", href: AppRoutes.PRODUCTOS },
      { title: "Categorías", href: AppRoutes.PRODUCTOS_CATEGORIAS },
    ],
  },
  {
    title: "Apps",
    href: AppRoutes.APPS,
    icon: TabletSmartphone,
    items: [{ title: "Todas las apps", href: AppRoutes.APPS }],
  },
  {
    title: "Páginas webs",
    href: AppRoutes.PAGINAS_WEBS,
    icon: Monitor,
    items: [
      { title: "Administrador", href: AppRoutes.PAGINAS_WEBS_ADMINISTRADOR },
      {
        title: "Recursos Humanos",
        href: AppRoutes.PAGINAS_WEBS_RECURSOS_HUMANOS,
      },
      {
        title: "Estudios Contables",
        href: AppRoutes.PAGINAS_WEBS_ESTUDIOS_CONTABLES,
      },
      { title: "Logística", href: AppRoutes.PAGINAS_WEBS_LOGISTICA },
    ],
  },
  {
    title: "Servidores",
    href: AppRoutes.SERVIDORES,
    icon: Server,
    items: [{ title: "Todos los servidores", href: AppRoutes.SERVIDORES }],
  },
  {
    title: "Tienda",
    href: AppRoutes.TIENDA,
    icon: Monitor,
    items: [{ title: "Todas las tiendas", href: AppRoutes.TIENDA }],
  },
  {
    title: "Centro de Ayuda",
    href: AppRoutes.CENTRO_DE_AYUDA,
    icon: Server,
    items: [{ title: "Todos los artículos", href: AppRoutes.CENTRO_DE_AYUDA }],
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={cn(
          "mb-5 flex-row items-center justify-between gap-0 py-4",
          sidebarSlotPaddingX,
        )}
      >
        <AppSidebarHeader />
      </SidebarHeader>

      <SidebarContent className={sidebarSlotPaddingX}>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter className={cn("py-4", sidebarSlotPaddingX)} />
    </Sidebar>
  )
}
