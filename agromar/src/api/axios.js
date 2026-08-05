import axios from "axios";

const api = axios.create({
  baseURL: "https://6a72cbf24d741b02b1f7c619.mockapi.io"
});

export default api;