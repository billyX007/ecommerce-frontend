export type ProductDataType = {
  _id?: string;
  name: string;
  price: number | string;
  inStock: number | string;
  categories?: {
    name: any; label: string; value: string 
}[];
  tags?: string[];
};

export interface List {
  [key: string]: string | List[];
}

export type CategoryDataType = {
  _id?: string;
  name: string;
};
