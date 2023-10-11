import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const menu = [
  {
    label: "Overview",
    link: "/dashboard",
  },
  {
    label: "Categories",
    link: "/dashboard/categories",
  },
  {
    label: "Products",
    link: "/dashboard/products",
  },
  {
    label: "Colors",
    link: "/dashboard/colors",
  },
  {
    label: "Tags",
    link: "/dashboard/tags",
  },
  {
    label: "Orders",
    link: "/orders",
  },
  {
    label: "Settings",
    link: "/settings",
  },
];

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <>
      {" "}
      {menu.map((menuItem, idx) => (
        <li key={`__menuItem${idx}`}>
          <Link
            href={menuItem.link}
            className={`border-b text-sm md:py-2 dark:text-white ${
              pathname === menuItem.link
                ? "font-semibold border-slate-900 dark:border-white"
                : "border-white dark:border-slate-900 font-medium"
            }`}
          >
            {menuItem.label}
          </Link>
        </li>
      ))}
    </>
  );
}
