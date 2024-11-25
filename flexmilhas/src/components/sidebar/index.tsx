import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar"

export function Sidebar({ children }: { children: React.ReactNode }){
    return (
      <SidebarProvider>
        <AppSidebar/>
        <main>
          <SidebarTrigger/>
          <div className="m-8 p-4">
            { children }
          </div>
        </main>
      </SidebarProvider>
    )
  }