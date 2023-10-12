import React from "react";
import Form from "../Form";
import Category from "@/lib/services/CategoryService";
import Color from "@/lib/services/ColorService";
import Tag from "@/lib/services/TagService";
import { addLabelToObject } from "@/lib/helper";

export default async function Page() {
  const categoriesPromise = Category.getAll();
  const colorPromise = Color.getAll();
  const tagPromise = Tag.getAll();
  const [categoriesRes, colorRes, tagRes] = await Promise.allSettled([
    categoriesPromise,
    colorPromise,
    tagPromise,
  ]);
  let categories, tags, colors;

  if (categoriesRes.status == "fulfilled") {
    categories = categoriesRes.value.categories;
  }
  if (colorRes.status == "fulfilled") {
    colors = colorRes.value.colors;
  }
  if (tagRes.status == "fulfilled") {
    tags = tagRes.value.tags;
  }

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
