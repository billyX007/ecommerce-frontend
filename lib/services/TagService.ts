import axios from "axios";
import { apiUrl } from "../env";

class Tag {
  constructor() {}

  static async create(data: { name: string }) {
    try {
      const res = await axios({
        method: "post",
        url: `${apiUrl}/tags`,
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
        url: `${apiUrl}/tags`,
        headers: {
          Accept: "application/json",
        },
      });
      return { tags: res.data.tags };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async getOne(id: string) {
    try {
      const res = await axios({
        method: "get",
        url: `${apiUrl}/tags/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
      return { tag: res.data.tag };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async edit(data: { name: string; _id: string }) {
    const { _id, ...rest } = data;
    try {
      const res = await axios({
        method: "put",
        url: `${apiUrl}/tags/${data._id}`,
        data: { ...rest },
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
        url: `${apiUrl}/tags/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Tag;
