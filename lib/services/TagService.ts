import axios from "../axios";

class Tag {
  constructor() {}
  static async create(data: { name: string }) {
    try {
      const res = await axios.post(`/tags`, data);
      return { product: res.data };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async getAll() {
    try {
      const res = await axios.get(`/tags`);
      return { tags: res.data.tags };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async getOne(id: string) {
    try {
      const res = await axios.get(`/tags/${id}`);
      return { tag: res.data.tag };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async edit(data: { name: string; _id: string }) {
    const { _id, ...rest } = data;
    try {
      const res = await axios.post(`/tags/${data._id}`, rest);
      return { product: res.data.product };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }

  static async delete(id: string) {
    try {
      await axios.delete(`/tags/${id}`);
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Tag;
