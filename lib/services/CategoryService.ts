import axios from "../axios";
import { GenericInterface } from "@/types";

class Category {
  constructor() {}
  static async create(data: GenericInterface) {
    try {
      const res = await axios.post("/categories", data);
      return { product: res.data };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async getAll() {
    try {
      const res = await axios.get("/categories");
      return { categories: res.data.categories };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async getOne(id: string) {
    try {
      const res = await axios.get(`/categories/${id}`);
      return { category: res.data.category };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async edit({ name, _id }: { name: string; _id: string }) {
    try {
      const res = await axios.put(`/categories/${_id}`, { name });
      return { product: res.data.product };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async delete(id: string) {
    try {
      await axios.delete(`/categories/${id}`);
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Category;
