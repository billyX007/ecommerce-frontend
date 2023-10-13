import axios from "../axios";

class Color {
  constructor() {}
  static async create(data: { name: string }) {
    try {
      const res = await axios.post("/colors", data);
      return { product: res.data };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async getAll() {
    try {
      const res = await axios.get("/colors");
      return { colors: res.data.colors };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async getOne(id: string) {
    try {
      const res = await axios.get(`/colors/${id}`);
      return { color: res.data.color };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async edit(data: { name: string; _id: string }) {
    const { _id, ...rest } = data;
    try {
      const res = await axios.put(`/colors/${data._id}`, rest);
      return { product: res.data.product };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async delete(id: string) {
    try {
      await axios.delete(`/colors/${id}`);
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Color;
