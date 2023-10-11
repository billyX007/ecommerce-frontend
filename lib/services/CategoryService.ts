import { ProductInterface } from "@/types";
import axios from "axios";
import { apiUrl } from "../env";

class Category {
  constructor() {}

  static async create(data: { name: string }) {
    try {
      const res = await axios({
        method: "post",
        url: `${apiUrl}/categories`,
        data,
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
        url: `${apiUrl}/categories`,
        headers: {
          Accept: "application/json",
        },
      });
      return { categories: res.data.categories };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async getOne(id: string) {
    try {
      const res = await axios({
        method: "get",
        url: `${apiUrl}/categories/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
      return { category: res.data.category };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async edit(data: { name: string; _id: string }) {
    try {
      const res = await axios({
        method: "put",
        url: `${apiUrl}/categories/${data._id}`,
        data,
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
        url: `${apiUrl}/categories/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Category;
