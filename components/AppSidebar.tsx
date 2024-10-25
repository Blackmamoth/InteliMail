import { Calendar, MailCheckIcon, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./toggle-mode";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Gmail",
    url: "/Gmail",
    icon: "/gmail.png",
  },
  {
    title: "Outlook",
    url: "/Outlook",
    icon: "/outlook.webp",
  },
  {
    title: "Office 365",
    url: "/Office365",
    icon: "/images.png",
  },
  {
    title: "MS Exchange",
    url: "/MSExchange",
    icon: "/Microsoft_Exchange_Server-Logo.wine.png",
  },
  {
    title: "Zoho Mail",
    url: "/Zoho",
    icon: "/mail-logo.png",
  }
];

export function AppSidebar() {
  
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="w-full flex justify-between py-10">
            <Link href={"/"} className="font-medium text-2xl bg-gradient-to-r from-red-300 via-orange-400  to-gray-400 dark:to-white inline-block text-transparent bg-clip-text">InteliMail</Link> <ModeToggle></ModeToggle>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex gap-2 items-center w-full justify-start px-4 hover:bg-gray-300 hover:text-black/60 dark:hover:bg-black dark:hover:text-white/70 duration-150 ease-in-out py-3 rounded-md">
                        <img className="w-8 h-8 rounded-full object-cover" src={item.icon}></img> &nbsp; {item.title}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                      <Link href={item.url}><DropdownMenuItem >Inbox</DropdownMenuItem></Link>
                        <DropdownMenuItem>Draft</DropdownMenuItem>
                        
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
