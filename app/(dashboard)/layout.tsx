import { AppSidebar } from "@/features/layout/sidebar/app-sidebar"
import { SidebarProvider } from "@/shared/components/ui/sidebar"

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>{children}</main>
    </SidebarProvider>
  )
}
