import {
  Calendar,
  Search,
  Settings,
  BrainCircuit,
  Globe,
  Files,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../sidebar";
import Link from "next/link";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ size?: number | string }>;
}

const navItems: NavItem[] = [
  {
    title: "Web",
    url: "/",
    icon: Globe,
  },
  {
    title: "Docs",
    url: "docs",
    icon: Files,
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
];

interface AppSidebarProps {
  softNav?: string[];
}

export function AppSidebar({ softNav }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"}>
              <Link href="/#" className="flex items-center space-x-2">
                <BrainCircuit size={30} />
                <span className="font-bold">Test</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator className="m-0" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isSoft = softNav?.includes(item.url);
                const Icon = item.icon;
                // const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      // isActive={isActive}
                    >
                      {isSoft ? (
                        <Link href={item.url}>
                          <Icon />
                          <span>{item.title}</span>
                        </Link>
                      ) : (
                        <a href={item.url}>
                          <Icon />
                          <span>{item.title}</span>
                        </a>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="m-0" />
      </SidebarContent>

      <SidebarSeparator className="m-0" />
    </Sidebar>
  );
}
