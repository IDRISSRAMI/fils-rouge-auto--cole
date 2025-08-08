import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export default function InstructorDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <PageHeader title="لوحة تحكم المدرب" subtitle="إدارة الدروس" />
        <div className="bg-white p-6 rounded shadow">
          <p>إضافة وتعديل الدروس للطلاب.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
