import axios from "axios";

const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

// Add request interceptor to dynamically attach token from localStorage
Axios.interceptors.request.use(
  (config) => {
    // Get token dynamically from localStorage before each request
    const token = localStorage.getItem("jwt") || localStorage.getItem("jwtAdmin");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
