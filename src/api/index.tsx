import axios from "axios";
import storage from "../helpers/storage";
import STORAGE_KEY from "../constants";

const axiosClient = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "Application/json",
    },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        const token = storage.get(STORAGE_KEY.ACCESS_KEY);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
export default axiosClient;
