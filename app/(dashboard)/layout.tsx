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
      <SidebarInset className="h-svh min-w-0">
        <AppHeader user={CURRENT_USER} />
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
