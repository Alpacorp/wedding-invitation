import axios from "axios";

let baseURL = "";

if (import.meta.env.VITE_ENV === "production") {
  baseURL = import.meta.env.VITE_API_URL_PROD;
} else if (import.meta.env.VITE_ENV === "development") {
  baseURL = import.meta.env.VITE_API_URL_DEV;
}

export const apiConfirm = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
