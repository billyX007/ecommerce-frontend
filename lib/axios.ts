import axios from "axios";
import { apiUrl } from "./env";
import { getCookie } from "./helper";

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? getCookie("auth-token") : null;
  config.headers = config.headers || {};
  config.headers.Accept = "application/json";
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export default axiosInstance;
