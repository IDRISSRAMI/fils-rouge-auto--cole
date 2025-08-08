import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <PageHeader
          title="مرحبا بك في منصة تعليم السياقة"
          subtitle="اختار خدماتك وابدأ التعلم"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-semibold mb-2">الدروس</h3>
            <p className="text-gray-600">تعلم القوانين ومهارات القيادة.</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-semibold mb-2">الامتحانات</h3>
            <p className="text-gray-600">اختبر نفسك وحسن مستواك.</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-semibold mb-2">المدفوعات</h3>
            <p className="text-gray-600">ادفع أونلاين بكل سهولة وأمان.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
