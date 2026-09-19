import { AppHeader, AppSidebar, type HeaderUser } from "@/features/layout"
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar"

const CURRENT_USER: HeaderUser = {
  fullName: "Miguel Liberato",
  firstName: "Miguel",
  role: "CEO LVL Consulting",
}

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader user={CURRENT_USER} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
