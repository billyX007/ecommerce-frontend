"use client";

import { cn } from "@/lib/utils";
import Select from "react-select";

export default function ReactSelect({ ...props }) {
  return (
    <Select
      {...props}
      classNamePrefix="custom-select"
      // styles={{
      //   control: (styles) => ({
      //     ...styles,
      //     "borderColor": "hsl(var(--border))",
      //     "background": "transparent",
      //     ":hover": { borderColor: "hsl(var(--border))" },
      //   }),
      //   menu: (styles) => ({
      //     ...styles,
      //     background: "transparent",
      //   }),
      //   menuList: (styles) => ({
      //     ...styles,
      //     background: "red",
      //     color: "white",
      //   }),
      //   menuPortal: (styles) => ({
      //     ...styles,
      //     background: "yellow",
      //     color: "red",
      //   }),

      //   multiValue: (styles) => ({
      //     ...styles,
      //     background: "transparent",
      //     border: "1px solid hsl(var(--border))",
      //   }),
      // }}
    />
  );
}
