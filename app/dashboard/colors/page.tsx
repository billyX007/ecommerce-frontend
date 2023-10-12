import React from "react";
import Table from "./Table";
import Color from "@/lib/services/ColorService";

export default async function Page() {
  const { colors } = await Color.getAll();

  return (
    <div className="mt-4">
      <div className="py-4 border-b">
        <h1 className="text-4xl font-bold">Colors ({colors.length})</h1>
        <p className="mt-2">Manage the different colors for your products</p>
      </div>

      <Table data={colors} />
    </div>
  );
}
