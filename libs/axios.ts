import axios from "axios";

const axiosIns = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axiosIns;
