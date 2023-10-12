"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { DataTable } from "@/app/components/table/DataTable";
import DeleteButton from "@/app/components/table/DeleteButton";
import Category from "@/lib/services/CategoryService";
import { toast } from "@/app/components/ui/use-toast";
import Link from "next/link";
import { getCreateFormLink } from "@/lib/helper";
import { CategoryDataType } from "@/types";

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

const columns: ColumnDef<CategoryDataType>[] = [
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Link className="pl-4" href={`/dashboard/tags/${row.original._id}`}>
          {row.original.name}
        </Link>
      );
    },
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

export default function Table({ data }: { data: CategoryDataType[] }) {
  return (
    <DataTable columns={columns} data={data} link={getCreateFormLink("tags")} />
  );
}
