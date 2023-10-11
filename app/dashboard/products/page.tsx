import Product from "@/lib/services/ProductService";
import React from "react";
import Table from "./Table";

export default async function Page() {
  const { products } = await Product.getAll();

  return (
    <div className="mt-6">
      <div className="py-4 border-b">
        <h1 className="text-4xl font-bold">Products ({products.length})</h1>
        <p className="mt-2">Manage products of your store</p>
      </div>
      <Table data={products} />
    </div>
  );
}
