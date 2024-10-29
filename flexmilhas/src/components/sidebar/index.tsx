import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar"

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider className="w-64">
          <AppSidebar/>
          <main>
            <SidebarTrigger/>
            {children}
          </main>
        </SidebarProvider>
      </div>
    )
  }