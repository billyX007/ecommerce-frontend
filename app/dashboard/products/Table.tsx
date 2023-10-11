"use client";
import { DataTable } from "@/app/components/table/DataTable";
import DeleteButton from "@/app/components/table/DeleteButton";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { toast } from "@/app/components/ui/use-toast";
import { getCreateFormLink, getEditFormLink } from "@/lib/helper";
import Category from "@/lib/services/CategoryService";
import { ProductDataType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Table({ data }: { data: ProductDataType[] }) {
  async function handleDelete(id: string) {
    const result = await Category.delete(id);
    if (result?.error) {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: result?.error,
      });
      return;
    }
  }

  const columns: ColumnDef<ProductDataType>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <Link
          className="pl-4"
          href={getEditFormLink("products", row.original._id as string)}
        >
          {row.original.name}
        </Link>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "inStock",
      enableSorting: true,
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <span className="inline-block pl-4">{row.original.inStock}</span>
      ),
    },
    {
      accessorKey: "categories",
      enableSorting: true,
      header: "Categories",
      cell: ({ row }) =>
        row.original?.categories?.map((category, i) => `${category.name}, `),
    },
    {
      id: "actions",
      enableHiding: false,
      header: "Actions",
      cell: ({ row }) => (
        <DeleteButton
          handleDelete={() => handleDelete(row.original._id as string)}
        />
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data}
      link={getCreateFormLink("products")}
    />
  );
}
