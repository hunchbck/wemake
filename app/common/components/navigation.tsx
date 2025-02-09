import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon
} from "lucide-react";
import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/common/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "~/common/components/ui/navigation-menu";
import { Separator } from "~/common/components/ui/separator";
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards"
      },
      {
        name: "Caregories",
        description: "Create and manage categories for your leaderboards",
        to: "/products/categories"
      },
      {
        name: "Search a Product",
        description: "Search for a product",
        to: "/products/search"
      },
      {
        name: "Submit a Product",
        description: "Submit a product to our community",
        to: "/products/submit"
      },
      {
        name: "Promote a Product",
        description: "Promote a product to our community",
        to: "/products/promote"
      }
    ]
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Jobs",
        description: "Find a job in our community",
        to: "/jobs"
      },
      {
        name: "Remote Jobs",
        description: "Find a remote job in our community",
        to: "/jobs?location=remote"
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time a job in our community",
        to: "/jobs?type=full-time"
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job in our community",
        to: "/jobs?type=freelance"
      },
      {
        name: "Internships",
        description: "Find an internship in our community",
        to: "/jobs?type=internship"
      },
      {
        name: "Submit a Job",
        description: "Submit a job to our community",
        to: "/jobs/submit"
      }
    ]
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All posts",
        description: "See all posts in our community",
        to: "/community/community"
      },
      {
        name: "Top posts",
        description: "See the top posts in our community",
        to: "/community?sort=top"
      },
      {
        name: "New posts",
        description: "See the new posts in our community",
        to: "/community?sort=new"
      },
      {
        name: "Create a post",
        description: "Create a post in our community",
        to: "/community/create"
      }
    ]
  },
  {
    name: "IdeasGPT",
    to: "/ideas"
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams"
      },
      {
        name: "Create a team",
        description: "Create a team in our community",
        to: "/teams/create"
      }
    ]
  }
];

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-background/50 px-20 backdrop-blur">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold tracking-tight">
          wemake
        </Link>
        <Separator orientation="vertical" className="mx-4 h-6" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] grid-cols-2 gap-3 p-4 font-light">
                        {menu.items.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors hover:bg-accent focus:bg-accent",
                              item.to === "/products/promote" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                              item.to === "/jobs/submit" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20"
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="block space-y-1 p-3 leading-none no-underline outline-none focus:underline"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    className={cn(navigationMenuTriggerStyle())}
                    to={menu.to}
                  >
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && (
                <span className="absolute -right-0.5 -top-0.5 flex size-2 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {hasNotifications}
                </span>
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && (
                <span className="absolute -right-0.5 -top-0.5 flex size-2 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {hasMessages}
                </span>
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">
                  john.doe@example.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <BarChart3Icon className="ml-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/profile">
                    <UserIcon className="ml-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings">
                    <SettingsIcon className="ml-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/auth/logout">
                  <LogOutIcon className="ml-2 h-4 w-4" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/join">Join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
