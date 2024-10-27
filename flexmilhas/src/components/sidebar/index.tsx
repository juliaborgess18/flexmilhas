import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar"

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
      <SidebarProvider>
        <AppSidebar/>
        <main>
          <SidebarTrigger/>
          {children}
        </main>
      </SidebarProvider>
    )
  }