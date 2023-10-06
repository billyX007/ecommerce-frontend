import Searchbar from "@/app/components/table/Searchbar";
import TableComponent from "@/app/components/table/TableComponent";
import { Button } from "@/app/components/ui/button";
import { productColumns } from "@/data/table-columns";
import { apiUrl } from "@/lib/env";
import Product from "@/lib/services/ProductService";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const { products } = await Product.getAll();

  return (
    <div className="bg-white rounded-md p-6">
      <div className="flex items-center justify-between">
        <Searchbar />
        <Link href="/dashboard/products/create">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-400">
            Create
          </Button>
        </Link>
      </div>
      <TableComponent columns={productColumns} list={products} />
    </div>
  );
}
