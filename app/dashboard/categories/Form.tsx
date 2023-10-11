"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/app/components/ui/use-toast";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useCallback, useLayoutEffect, useState } from "react";
import { notFound } from "next/navigation";
import { CategoryInterface } from "@/types";
import Category from "@/lib/services/CategoryService";

interface CategoryEditInterface extends CategoryInterface {
  _id: string;
}

export default function Form() {
  const [data, setData] = useState<CategoryInterface>({
    name: "",
  });
  const [error, setError] = useState({
    name: "",
  });
  const [isNotFound, setIsNotFound] = useState(false);
  const { id } = useParams();
  const { toast } = useToast();

  const getProduct = useCallback(async () => {
    const res = await Category.getOne(id as string);
    if (res.error) {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: res.error,
      });
      setIsNotFound(true);
    }
    setData(res.category);
  }, [id, toast]);

  useLayoutEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id, getProduct]);

  async function editProduct() {
    const res = await Category.edit(data as CategoryEditInterface);
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
    const res = await Category.create(data);
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

  if (isNotFound) return notFound();
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
