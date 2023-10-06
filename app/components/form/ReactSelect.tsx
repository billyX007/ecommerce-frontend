"use client";

import Select from "react-select";

export default function ReactSelect({ ...props }) {
  return (
    <Select
      options={[{ label: "Glassess", value: "glassess" }]}
      {...props}
      styles={{
        control: (styles) => ({ ...styles, borderColor: "hsl(var(--border))" }),
      }}
    />
  );
}