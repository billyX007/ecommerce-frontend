import { Table, TableCaption } from "@/app/components/ui/table";
import { Column, TableProps } from "@/types";
import TableBodyComponent from "./TableBodyComponent";
import TableHeadComponent from "./TableHeadComponent";

interface TablePropsChild extends TableProps {
  label: string;
}

export default function TableComponent({
  columns,
  list,
  label,
}: TablePropsChild) {
  return (
    <Table>
      <TableCaption>A list of your recently added {label}.</TableCaption>
      <TableHeadComponent columns={columns} />
      <TableBodyComponent list={list} columns={columns} />
    </Table>
  );
}
