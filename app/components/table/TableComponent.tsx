import { Table, TableCaption } from "@/app/components/ui/table";
import { Column, TableProps } from "@/types";
import TableBodyComponent from "./TableBodyComponent";
import TableHeadComponent from "./TableHeadComponent";

export default function TableComponent({ columns, list }: TableProps) {
  return (
    <Table>
      <TableCaption>A list of your recently added products.</TableCaption>
      <TableHeadComponent columns={columns} />
      <TableBodyComponent list={list} columns={columns} />
    </Table>
  );
}
