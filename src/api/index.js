import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URI,
});

export const multiFormApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URI,
});

export const authApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URI,
});

export const authMultiFormApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URI,
});

authApi.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`
    return config
}, error => {
    return Promise.reject(error)
});

multiFormApi.interceptors.request.use(config => {
    config.headers["content-type"] = "multipart/form-data"
    return config
}, error => {
    return Promise.reject(error)
});

authMultiFormApi.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`
    config.headers["content-type"] = "multipart/form-data"
    return config
}, error => {
    return Promise.reject(error)
});