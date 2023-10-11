export type ProductDataType = {
  _id?: string;
  name: string;
  price: number | string;
  inStock: number | string;
  categories?: {
    name: any;
    label: string;
    value: string;
  }[];
  tags?: string[];
};

export interface List {
  [key: string]: string | List[];
}

export interface CategoryDataType {
  _id?: string;
  name: string;
}

export interface CategoryInterface extends CategoryDataType {
  label: string;
  value: string;
}
