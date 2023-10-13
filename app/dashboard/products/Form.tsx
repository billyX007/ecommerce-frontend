"use client";

import ReactSelect from "@/app/components/form/ReactSelect";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/app/components/ui/use-toast";
import { getCookie } from "@/lib/helper";
import Product from "@/lib/services/ProductService";
import {
  CategoryDataType,
  CategoryInterface,
  ColorDataType,
  ColorInterfaceWithLabel,
  ProductDataType,
  TagDataType,
  TagInterfaceWithLabel,
} from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Form({
  productData,
  categories,
  tags,
  colors,
}: {
  productData?: ProductDataType;
  categories: CategoryDataType[];
  tags: TagDataType[];
  colors: ColorDataType[];
}) {
  const [data, setData] = useState<ProductDataType>(
    productData ?? {
      name: "",
      price: "",
      inStock: "",
    }
  );
  const [error, setError] = useState({
    name: "",
    price: "",
    inStock: "",
  });
  const { id } = useParams();
  const { toast } = useToast();

  const dot = (color = "transparent") => ({
    "alignItems": "center",
    "display": "flex",
    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      border: "0.1px solid hsl(var(--foreground))",
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 16,
      width: 16,
    },
  });

  async function editProduct() {
    const res = await Product.edit(data);
    if (res.error) {
      setError(res.error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description:
          typeof res.error === "string"
            ? res.error
            : Object.keys(res.error).map((item, i) => (
                <li key={`__error${i}`}>{res.error[item]}</li>
              )),
      });
      return;
    }
    toast({
      title: "Success",
      description: "You have successfully edited the product.",
    });
  }
  async function createNewProduct() {
    const res = await Product.create(data);
    if (res.error) {
      setError(res.error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description:
          typeof res.error === "string"
            ? res.error
            : Object.keys(res.error).map((item, i) => (
                <li key={`__error${i}`}>{res.error[item]}</li>
              )),
      });
      return;
    }
    toast({
      title: "Success",
      description: "You have successfully added a new product.",
    });
  }

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (data._id && id) {
      editProduct();
      return;
    }
    if (!id) createNewProduct();
  }

  return (
    <form onSubmit={handleSubmitForm} encType="mutipart/form-data">
      <div className="mb-4">
        <Label htmlFor="name">Name*</Label>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          className="mt-2"
          value={data.name}
          onChange={(e) =>
            setData((p) => ({ ...p, [e.target.name]: e.target.value }))
          }
          error={error.name}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="price">Price*</Label>
        <Input
          name="price"
          id="price"
          type="number"
          placeholder="Price (Rs)"
          className="mt-2"
          value={data.price}
          error={error.price}
          onChange={(e) =>
            setData((p) => ({ ...p, [e.target.name]: e.target.value }))
          }
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="inStock">In Stock*</Label>
        <Input
          name="inStock"
          id="inStock"
          type="number"
          placeholder="In Stock"
          className="mt-2"
          value={data.inStock}
          error={error.inStock}
          onChange={(e) =>
            setData((p) => ({ ...p, [e.target.name]: e.target.value }))
          }
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="categories">Categories</Label>
        <ReactSelect
          options={categories}
          className="mt-2 border-input"
          isMulti
          value={data.categories}
          id="categoriesDropdown"
          onChange={(value: CategoryInterface[]) =>
            setData((p) => ({
              ...p,
              categories: value,
            }))
          }
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="tags">Colors</Label>
        <ReactSelect
          options={colors}
          className="mt-2 border-input"
          isMulti
          value={data.colors}
          styles={{
            option: (
              styles: { [x: string]: string },
              data: {
                data: ColorInterfaceWithLabel;
              }
            ) => ({
              ...styles,
              ...dot(data.data.code),
            }),
            multiValueLabel: (
              styles: { [x: string]: string },
              data: {
                data: ColorInterfaceWithLabel;
              }
            ) => ({
              ...styles,
              ...dot(data.data.code),
            }),
          }}
          onChange={(value: ColorInterfaceWithLabel[]) =>
            setData((p) => ({ ...p, colors: value }))
          }
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="tags">Tags</Label>
        <ReactSelect
          options={tags}
          className="mt-2 border-input"
          isMulti
          value={data.tags}
          onChange={(value: TagInterfaceWithLabel[]) =>
            setData((p) => ({ ...p, tags: value }))
          }
        />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <Checkbox
          name="is_featured"
          id="is_featured"
          checked={data.is_featured}
          onCheckedChange={(checked) =>
            setData((p) => ({
              ...p,
              is_featured: checked as boolean,
            }))
          }
        />
        <Label htmlFor="is_featured">Featured Product</Label>
      </div>
      <div className=" mt-6 pt-6 border-t flex items-center justify-end gap-4">
        <Link href="/dashboard/products">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
        </Link>
        <Button
          type="submit"
          variant="default"
          className="bg-blue-500 hover:bg-blue-400"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
