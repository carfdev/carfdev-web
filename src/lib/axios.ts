import axios from "axios";
import { API_URL } from "astro:env/client";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const request = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: unknown,
): Promise<T> => {
  const res = await api.request<T>({ method, url, data });
  return res.data;
};
