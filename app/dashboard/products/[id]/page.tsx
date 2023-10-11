import React from "react";
import Form from "../Form";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Product from "@/lib/services/ProductService";
import { notFound } from "next/navigation";
import Category from "@/lib/services/CategoryService";
import { CategoryDataType } from "@/types";

export default async function page({ params }: { params: Params }) {
  const productPromise = Product.getOne(params.id);
  const categoriesPromise = Category.getAll();
  const [productRes, categoriesRes] = await Promise.allSettled([
    productPromise,
    categoriesPromise,
  ]);
  let product, categories;
  if (productRes.status == "fulfilled") {
    product = productRes.value.product;
  }
  if (categoriesRes.status == "fulfilled") {
    categories = categoriesRes.value.categories;
  }

  if (productRes.status === "rejected") {
    return notFound();
  }
  return (
    <div className="mt-6">
      <div className="py-4 border-b">
        <h1 className="text-4xl font-bold">Edit {product.name}</h1>
        <p className="mt-2">Edit the products of your store</p>
      </div>
      <div className="p-6">
        <Form
          productData={{
            ...product,
            categories: product.categories?.map((item: CategoryDataType) => ({
              ...item,
              label: item.name,
              value: item._id,
            })),
          }}
          categories={categories.map((item: CategoryDataType) => ({
            ...item,
            label: item.name,
            value: item._id,
          }))}
        />
      </div>
    </div>
  );
}
