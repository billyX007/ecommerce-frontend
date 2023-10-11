"use client";

import ReactSelect from "@/app/components/form/ReactSelect";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/app/components/ui/use-toast";
import Product from "@/lib/services/ProductService";
import { CategoryDataType, CategoryInterface, ProductDataType } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Form({
  productData,
  categories,
}: {
  productData?: ProductDataType;
  categories: CategoryDataType[];
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

  async function editProduct() {
    const res = await Product.edit(data);
    if (res.error) {
      setError(res.error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description:
          "It appears the data you provided is not valid. Please recheck the data you have provided.",
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
          "It appears the data you provided is not valid. Please recheck the data you have provided.",
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
    <form onSubmit={handleSubmitForm}>
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
        <Label htmlFor="tags">Tags</Label>
        <ReactSelect
          className="mt-2 border-input"
          isMulti
          value={data.tags}
          onChange={(value: string[]) =>
            setData((p) => ({ ...p, tags: value }))
          }
        />
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
