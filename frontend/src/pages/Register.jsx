import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { registerUser } from "../services/authService";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(formData);
    alert("تم التسجيل بنجاح!");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h2 className="text-2xl font-bold mb-6">إنشاء حساب</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            className="w-full border rounded p-2"
            onChange={handleChange}
          />
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
          <select
            name="role"
            className="w-full border rounded p-2"
            onChange={handleChange}
          >
            <option value="STUDENT">طالب</option>
            <option value="INSTRUCTOR">مدرب</option>
            <option value="ADMIN">مدير</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            تسجيل
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
