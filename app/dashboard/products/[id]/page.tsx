import React from "react";
import Form from "../Form";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Product from "@/lib/services/ProductService";
import { notFound } from "next/navigation";
import Category from "@/lib/services/CategoryService";
import Color from "@/lib/services/ColorService";
import Tag from "@/lib/services/TagService";
import { addLabelToObject } from "@/lib/helper";

export default async function page({ params }: { params: Params }) {
  const productPromise = Product.getOne(params.id);
  const categoriesPromise = Category.getAll();
  const colorPromise = Color.getAll();
  const tagPromise = Tag.getAll();
  const [productRes, categoriesRes, colorRes, tagRes] =
    await Promise.allSettled([
      productPromise,
      categoriesPromise,
      colorPromise,
      tagPromise,
    ]);
  let product, categories, tags, colors;
  if (productRes.status == "fulfilled") {
    product = productRes.value.product;
  }
  if (categoriesRes.status == "fulfilled") {
    categories = categoriesRes.value.categories;
  }
  if (colorRes.status == "fulfilled") {
    colors = colorRes.value.colors;
  }
  if (tagRes.status == "fulfilled") {
    tags = tagRes.value.tags;
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
