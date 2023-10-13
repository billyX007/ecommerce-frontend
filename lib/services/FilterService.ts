import axios from "../axios";

class Filter {
  constructor() {}

  static async getFilters() {
    const res = await axios.get("/filters");
    return { ...res.data };
  }
}

export default Filter;
