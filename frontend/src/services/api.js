import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // حط هنا رابط الـ backend ديالك
  headers: {
    "Content-Type": "application/json",
  },
});

// إضافة التوكن إذا كان المستخدم مسجل الدخول
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
