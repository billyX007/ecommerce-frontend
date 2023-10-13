import { ProductDataType } from "@/types";
import axiosInstance from "../axios";

class Product {
  constructor() {}
  static async create(data: ProductDataType) {
    const dataObj = {
      ...data,
      categories: data.categories?.map((item) => item.value),
      tags: data.tags?.map((item) => item.value),
      colors: data.colors?.map((item) => item.value),
    };
    try {
      const res = await axiosInstance.post("/products", dataObj);
      return { product: res.data };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async getAll() {
    try {
      const res = await axiosInstance.get("/products");
      return { products: res.data.products };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async getOne(id: string) {
    try {
      const res = await axiosInstance.get(`/products/${id}`);
      return { product: res.data.product };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async edit(data: ProductDataType) {
    const { _id, ...rest } = data;
    const dataObj = {
      ...rest,
      categories: rest.categories?.map((item) => item.value),
      tags: rest.tags?.map((item) => item.value),
      colors: rest.colors?.map((item) => item.value),
    };
    try {
      const res = await axiosInstance.put(`/products/${_id}`, dataObj);
      return { product: res.data.product };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async delete(id: string) {
    try {
      await axiosInstance.delete(`/products/${id}`);
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Product;
