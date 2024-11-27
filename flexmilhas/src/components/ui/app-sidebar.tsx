import { Calendar, CircleDollarSign, Handshake, Home, Inbox, LogOut, Search, Settings, ShoppingBag, TicketsPlane } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Minhas Milhas",
    url: "/usuario/painel/minhas-milhas",
    icon: TicketsPlane,
  },
  {
    title: "Comprar",
    url: "/usuario/painel/comprar-milha",
    icon: ShoppingBag,
  },
  {
    title: "Vender",
    url: "/usuario/painel/vender-milha",
    icon: CircleDollarSign,
  },
  {
    title: "Movimentações",
    url: "/usuario/painel/movimentacao",
    icon: Handshake,
  },
  {
    title: "Sair",
    url: "/",
    icon: LogOut,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>FlexMilhas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
