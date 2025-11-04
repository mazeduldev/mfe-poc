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
  softNav?: boolean;
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
  const processedNavItems: NavItem[] = softNav
    ? navItems.map((item) => {
        if (softNav.includes(item.url)) {
          return { ...item, softNav: true };
        }
        return item;
      })
    : navItems;
  console.log(processedNavItems);

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
              {processedNavItems.map((item) => {
                const Icon = item.icon;
                // const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      // isActive={isActive}
                    >
                      {item.softNav ? (
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
