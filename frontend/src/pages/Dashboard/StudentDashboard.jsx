import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export default function StudentDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <PageHeader title="لوحة تحكم الطالب" subtitle="متابعة الدروس" />
        <div className="bg-white p-6 rounded shadow">
          <p>مشاهدة الدروس، أداء الاختبارات، وتتبع التقدم.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
