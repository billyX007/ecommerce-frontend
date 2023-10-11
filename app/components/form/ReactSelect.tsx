"use client";

import Select from "react-select";

export default function ReactSelect({ ...props }) {
  return (
    <Select
      {...props}
      styles={{
        control: (styles) => ({ ...styles, borderColor: "hsl(var(--border))" }),
      }}
    />
  );
}
