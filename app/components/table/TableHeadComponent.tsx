import { TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { Column } from "@/types";

export default function TableHeadComponent({ columns }: { columns: Column[] }) {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className=" py-1 align-bottom">#</TableHead>
        <TableHead className="w-10" />
        {columns.map((column: Column, i: number) => (
          <TableHead className="align-bottom py-1" key={`tableHead${i}`}>
            {column.label}
          </TableHead>
        ))}
        <TableHead className="text-right align-bottom py-1">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
}
