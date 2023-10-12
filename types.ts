export type ProductDataType = {
  _id?: string;
  name: string;
  price: number | string;
  inStock: number | string;
  categories?: CategoryInterface[];
  tags?: TagInterfaceWithLabel[];
  colors?: ColorInterfaceWithLabel[];
};

export interface List {
  [key: string]: string | List[];
}

export interface CategoryDataType {
  _id?: string;
  name: string;
}
export interface TagDataType {
  _id?: string;
  name: string;
}

export interface TagInterfaceWithLabel extends TagDataType {
  label: string;
  value: string;
}

export interface CategoryInterface extends CategoryDataType {
  label: string;
  value: string;
}

export interface ColorDataType {
  [x: string]: string | string[];
  name: string;
  code: string;
}
export interface ColorInterfaceWithLabel extends ColorDataType {
  label: string;
  value: string;
}

export interface GenericInterface {
  [x: string]: string;
}
