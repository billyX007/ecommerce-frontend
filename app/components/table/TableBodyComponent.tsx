import { TableBody, TableCell, TableRow } from "@/app/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import { Avatar, AvatarImage } from "../ui/avatar";
import DeleteButton from "./DeleteButton";
import { List, TableProps } from "@/types";
import Link from "next/link";
import { ReactNode } from "react";

export default function TableBodyComponent({ list, columns }: TableProps) {
  return (
    <TableBody>
      {list.map((item: List, i: number) => (
        <TableRow key={`tableRow${i}`}>
          <TableCell className="font-medium">
            <Checkbox className="" />
          </TableCell>
          <TableCell className="font-medium">
            <Avatar>
              <AvatarImage src="/placeholders/user.png" alt="Product Image" />
            </Avatar>
          </TableCell>
          {columns.map((column, idx) => {
            if (Array.isArray(item[column.field])) {
              return (
                <TableCell key={`tableCell${idx}`}>
                  <Link href={`/dashboard/products/${item._id}`}>
                    {(item[column.field] as List[])?.map(
                      (field: List, i: number) => `${field.name}, `
                    )}
                  </Link>
                </TableCell>
              );
            }
            return (
              <TableCell key={`tableCell${idx}`}>
                <Link href={`/dashboard/products/${item._id}`}>
                  {item[column.field] as ReactNode}
                </Link>
              </TableCell>
            );
          })}

          <TableCell className="text-end">
            <DeleteButton id={item._id as string} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
