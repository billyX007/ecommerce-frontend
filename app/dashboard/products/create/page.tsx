import React from "react";
import Form from "../Form";
import { addLabelToObject } from "@/lib/helper";
import Filter from "@/lib/services/FilterService";

export default async function Page() {
  const { categories, tags, colors } = await Filter.getFilters();

  return (
    <div className="rounded-md shadow-sm">
      <h2 className="font-semibold py-6 pl-4 border-b text-center">
        Create New Product
      </h2>
      <div className="p-6">
        <Form
          categories={categories.map(addLabelToObject)}
          tags={tags.map(addLabelToObject)}
          colors={colors.map(addLabelToObject)}
        />
      </div>
    </div>
  );
}
