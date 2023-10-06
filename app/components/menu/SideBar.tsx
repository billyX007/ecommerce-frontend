import React from "react";
import { headers } from "next/headers";
import NavItem from "./NavItem";
import SidebarFooter from "./SidebarFooter";
import { menu } from "@/data/menu";

export default function SideBar() {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  console.log();
  return (
    <div className="bg-zinc-900 w-80 h-screen flex flex-col justify-between">
      <div className="p-6 relative z-20 flex items-center text-lg font-medium text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Acme Inc
      </div>

      <nav className="text-white mt-16 flex-1">
        <ul>
          {menu.map((menuItem, i) => (
            <NavItem
              key={`__menuItem${i}`}
              link={menuItem.link}
              label={menuItem.label}
            />
          ))}
        </ul>
      </nav>

      <SidebarFooter />
    </div>
  );
}
