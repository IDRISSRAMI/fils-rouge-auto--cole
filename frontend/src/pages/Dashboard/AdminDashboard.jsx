import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <PageHeader title="لوحة تحكم المدير" subtitle="إدارة المنصة" />
        <div className="bg-white p-6 rounded shadow">
          <p>إحصائيات، إدارة المستخدمين، وإعدادات النظام.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
