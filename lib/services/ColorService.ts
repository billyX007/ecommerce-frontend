import axios from "axios";
import { apiUrl } from "../env";

class Color {
  constructor() {}

  static async create(data: { name: string }) {
    try {
      const res = await axios({
        method: "post",
        url: `${apiUrl}/colors`,
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
        url: `${apiUrl}/colors`,
        headers: {
          Accept: "application/json",
        },
      });
      return { colors: res.data.colors };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async getOne(id: string) {
    try {
      const res = await axios({
        method: "get",
        url: `${apiUrl}/colors/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
      return { color: res.data.color };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
  static async edit(data: { name: string; _id: string }) {
    const { _id, ...rest } = data;
    try {
      const res = await axios({
        method: "put",
        url: `${apiUrl}/colors/${data._id}`,
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
        url: `${apiUrl}/colors/${id}`,
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  }
}

export default Color;
