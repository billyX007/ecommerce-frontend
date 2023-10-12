import React from "react";
import Table from "./Table";
import Tag from "@/lib/services/TagService";

export default async function Page() {
  const { tags } = await Tag.getAll();

  return (
    <div className="mt-4">
      <div className="py-4 border-b">
        <h1 className="text-4xl font-bold">Tags ({tags.length})</h1>
        <p className="mt-2">Manage the tag options for the products</p>
      </div>

      <Table data={tags} />
    </div>
  );
}
