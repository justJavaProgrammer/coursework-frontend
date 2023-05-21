import axios from 'axios';
import {SERVER_URL} from "../constants";

const axiosInstance = axios.create({
    baseURL: SERVER_URL, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
