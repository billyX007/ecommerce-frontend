"use client";

import Select from "react-select";

export default function ReactSelect({ ...props }) {
  return <Select {...props} classNamePrefix="custom-select" />;
}
