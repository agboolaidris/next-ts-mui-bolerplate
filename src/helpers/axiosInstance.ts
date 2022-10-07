import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BLOG_URL,
  headers: {},
});

export default axiosInstance;
