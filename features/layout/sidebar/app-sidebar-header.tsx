import { SidebarTrigger } from "@/shared/components/ui/sidebar"
import { Menu } from "lucide-react"
import Image from "next/image"

export const AppSidebarHeader = () => {
  return (
    <>
      <div className="relative h-8 w-28 overflow-hidden transition-[width,opacity] duration-200 ease-linear group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0">
        <Image
          src="/LVL-logo.svg"
          alt="LVL Consulting"
          fill
          priority
          className="object-contain"
        />
      </div>
      <SidebarTrigger>
        <Menu />
      </SidebarTrigger>
    </>
  )
}
