"use client"

import { cn } from "cn"
import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/shared/components/ui/sidebar"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
  items?: {
    title: string
    href: string
  }[]
}

const NAV_BUTTON_FONT =
  "font-medium hover:font-semibold data-active:font-semibold"
const SUB_BUTTON_INDENT = "pl-9.5"
const PARENT_BUTTON_ACTIVE =
  "data-active:bg-transparent data-active:text-sidebar-foreground group-data-[collapsible=icon]:data-active:bg-sidebar-accent group-data-[collapsible=icon]:data-active:text-sidebar-accent-foreground"

export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel className="h-fit mb-4">
        <span>Menu</span>
      </SidebarGroupLabel>
      <SidebarMenu className="gap-3">
        {items.map((item) => {
          const isActive = pathname.startsWith(item.href)

          if (!item.items?.length) {
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                  className={cn("gap-3 p-2.5 text-xs", NAV_BUTTON_FONT)}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span className="whitespace-nowrap">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          return (
            <Collapsible
              key={item.href}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={item.title}
                    className={cn(
                      "cursor-pointer gap-3 p-2.5 text-xs",
                      NAV_BUTTON_FONT,
                      PARENT_BUTTON_ACTIVE,
                    )}
                  >
                    <item.icon />
                    <span className="whitespace-nowrap">{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="border-l-0 mx-0 px-0 gap-2 mt-3">
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.href}>
                        <SidebarMenuSubButton
                          asChild
                          size="sm"
                          isActive={pathname === subItem.href}
                          className={cn(
                            "h-8 p-2.5",
                            SUB_BUTTON_INDENT,
                            NAV_BUTTON_FONT,
                          )}
                        >
                          <Link href={subItem.href}>
                            <span className="whitespace-nowrap">
                              {subItem.title}
                            </span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
