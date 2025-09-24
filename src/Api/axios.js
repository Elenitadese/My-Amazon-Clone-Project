
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-qk6b.onrender.com",  
});

export { axiosInstance };
