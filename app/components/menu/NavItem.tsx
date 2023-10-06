"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  link: string;
}

export default function NavItem({ label, link }: NavItemProps) {
  const pathname = usePathname();
  return (
    <li
      className={`py-3 px-6 hover:bg-zinc-950 ${
        pathname === link ? "bg-zinc-950" : ""
      } `}
    >
      <Link href={link} className="block text-sm">
        {label}
      </Link>
    </li>
  );
}
