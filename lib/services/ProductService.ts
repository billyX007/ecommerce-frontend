import { ProductDataType } from "@/types";
import axios from "axios";
import { apiUrl } from "../env";

class Product {
  constructor() {}

  static async create(data: ProductDataType) {
    try {
      const res = await axios({
        method: "post",
        url: `${apiUrl}/products`,
        data: {
          ...data,
          categories: data.categories?.map((item) => item.value),
          tags: data.tags?.map((item) => item.value),
          colors: data.colors?.map((item) => item.value),
        },
        headers: {
          Accept: "application/json",
        },
      });
      return { product: res.data };
    } catch (error: any) {
      console.log(error.message);
      return { error: error.response.data.error };
    }
  }

  static async getAll() {
    try {
      const res = await axios({
        method: "get",
        url: `${apiUrl}/products`,
        headers: {
          Accept: "application/json",
        },
      });
      return { products: res.data.products };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async getOne(id: string) {
    try {
      const res = await axios({
        method: "get",
        url: `${apiUrl}/products/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
      return { product: res.data.product };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async edit(data: ProductDataType) {
    const { _id, ...rest } = data;
    try {
      const res = await axios({
        method: "put",
        url: `${apiUrl}/products/${data._id}`,
        data: {
          ...rest,
          categories: rest.categories?.map((item) => item.value),
        },
        headers: {
          Accept: "application/json",
        },
      });
      return { product: res.data.product };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async delete(id: string) {
    try {
      const res = await axios({
        method: "delete",
        url: `${apiUrl}/products/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Product;
