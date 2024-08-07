/** @format */
"use client";

import { useState } from "react";
import { Nav } from "../components/ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  BotMessageSquare,
  MessageCircleCode,
  MessageCircle
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 pr-6">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Users",
            href: "/dashboard/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Ordrs",
            href: "/dashboard/orders",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Chats",
            href: "/dashboard/chats",
            icon: MessageCircle,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
