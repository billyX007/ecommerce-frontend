export type TableProps = {
  columns: Column[];
  list: List[];
};

export type Column = {
  label: string;
  search?: boolean;
  field: string;
};

export interface ProductInterface {
  _id?: string;
  name: string;
  price: number | string;
  inStock: number | string;
  categories?: string[];
  tags?: string[];
}

export interface List {
  [key: string]: string | List[] | null;
}
