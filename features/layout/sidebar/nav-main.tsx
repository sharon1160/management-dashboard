"use client"

import { cn } from "cn"
import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
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
const PARENT_TEXT_ONLY_ACTIVE =
  "data-active:bg-transparent data-active:text-primary group-data-[collapsible=icon]:data-active:bg-sidebar-accent group-data-[collapsible=icon]:data-active:text-sidebar-accent-foreground"

function matchesPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

function getActiveSubHref(pathname: string, subItems: NavItem["items"]) {
  return subItems
    ?.filter((sub) => matchesPath(pathname, sub.href))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href
}

export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  const activeParentHref = items.find((item) =>
    matchesPath(pathname, item.href),
  )?.href

  const [openHref, setOpenHref] = useState<string | null>(
    activeParentHref ?? null,
  )

  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel className="h-fit mb-4">Menu</SidebarGroupLabel>
      <SidebarMenu className="gap-3">
        {items.map((item) => {
          const isActive = matchesPath(pathname, item.href)
          const activeSubHref = getActiveSubHref(pathname, item.items)

          if (!item.items?.length) {
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                  onClick={() => setOpenHref(null)}
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

          const parentContent = (
            <>
              <item.icon />
              <span className="whitespace-nowrap">{item.title}</span>
            </>
          )

          return (
            <Collapsible
              key={item.href}
              asChild
              open={openHref === item.href}
              onOpenChange={(open) => setOpenHref(open ? item.href : null)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setOpenHref(null)}
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                  className={cn(
                    "gap-3 p-2.5 text-xs",
                    NAV_BUTTON_FONT,
                    activeSubHref && PARENT_TEXT_ONLY_ACTIVE,
                  )}
                >
                  <Link href={item.href}>{parentContent}</Link>
                </SidebarMenuButton>
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction
                    aria-label={`Alternar ${item.title}`}
                    className="cursor-pointer top-2.5 right-2 [&>svg]:transition-transform [&>svg]:duration-200 group-data-[state=open]/collapsible:[&>svg]:rotate-90"
                  >
                    <ChevronRight />
                  </SidebarMenuAction>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="border-l-0 mx-0 px-0 gap-2 mt-3">
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.href}>
                        <SidebarMenuSubButton
                          asChild
                          size="sm"
                          isActive={activeSubHref === subItem.href}
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
