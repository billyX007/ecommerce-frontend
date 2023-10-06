"use client";

import { deleteCookie } from "@/lib/helper";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarFooter() {
  const pathname = usePathname();
  const { push } = useRouter();
  function handleLogout() {
    deleteCookie("auth-token");
    push("/login");
  }

  return (
    <ul className="text-white text-sm">
      <li
        className={`py-3 px-6 block hover:bg-zinc-950 ${
          pathname === "/dashboard/settings" ? "bg-zinc-950" : ""
        } `}
      >
        <Link href="/dashboard/settings" className="block">
          Settings
        </Link>
      </li>
      <li className="py-3 px-6 block hover:bg-zinc-950 ">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full text-left"
        >
          Log out
        </button>
      </li>
    </ul>
  );
}
