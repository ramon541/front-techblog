import axios, {
    AxiosError,
    type AxiosInstance,
    type AxiosResponse,
} from 'axios';

//= =================================================================================
const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 10000,
});

//= =================================================================================
// ---- Request Middleware
api.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//= =================================================================================
// ---- Response Middleware
api.interceptors.response.use(
    async (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error.response?.data);
    }
);

export default api;
