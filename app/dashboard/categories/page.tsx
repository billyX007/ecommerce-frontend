import Category from "@/lib/services/CategoryService";
import React from "react";
import Table from "./Table";

export default async function Page() {
  const { categories } = await Category.getAll();

  return (
    <div className="mt-4">
      <div className="py-4 border-b">
        <h1 className="text-4xl font-bold">Categories ({categories.length})</h1>
        <p className="mt-2">Manage categories of your store</p>
      </div>

      <Table data={categories} />
    </div>
  );
}
