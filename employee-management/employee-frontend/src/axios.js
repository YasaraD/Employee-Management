import axios from "axios";

// Create an Axios instance with base URL pointing to the Laravel API
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/", // URL of the Laravel backend
});

export default axiosInstance;
