import axios, { AxiosInstance } from "axios";

// here we create a custom Axios instance instead, for re-usability
export const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});
