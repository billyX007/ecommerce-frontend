import React from "react";
import Form from "../Form";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Product from "@/lib/services/ProductService";
import { notFound } from "next/navigation";
import { addLabelToObject } from "@/lib/helper";
import Filter from "@/lib/services/FilterService";

export default async function page({ params }: { params: Params }) {
  const productPromise = Product.getOne(params.id);
  const filterPromise = Filter.getFilters();
  const [productRes, filterRes] = await Promise.allSettled([
    productPromise,
    filterPromise,
  ]);
  let product, categories, tags, colors;
  if (productRes.status == "fulfilled") {
    product = productRes.value.product;
  }

  if (filterRes.status === "fulfilled") {
    categories = filterRes.value.categories;
    tags = filterRes.value.tags;
    colors = filterRes.value.colors;
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
            categories: product.categories?.map(addLabelToObject),
            tags: product.tags?.map(addLabelToObject),
            colors: product.colors?.map(addLabelToObject),
          }}
          categories={categories.map(addLabelToObject)}
          tags={tags.map(addLabelToObject)}
          colors={colors.map(addLabelToObject)}
        />
      </div>
    </div>
  );
}
