import axios from "axios";
import { apiUrl } from "./env";

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
