import axios from "axios";

// For local development
// const BASE_URL = "http://localhost:3000";

// For production
const BASE_URL = "https://amazon-api-deploy-c9om.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
