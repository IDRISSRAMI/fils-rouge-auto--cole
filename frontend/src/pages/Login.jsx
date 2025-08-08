import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loginUser } from "../services/authService";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    if (res.success) {
      alert("تم تسجيل الدخول بنجاح!");
      // ممكن هنا تحط توجيه حسب الدور
      // navigate("/dashboard")
    } else {
      alert("خطأ في البريد أو كلمة المرور");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h2 className="text-2xl font-bold mb-6">تسجيل الدخول</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded p-6 space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            className="w-full border rounded p-2"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            className="w-full border rounded p-2"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            دخول
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
