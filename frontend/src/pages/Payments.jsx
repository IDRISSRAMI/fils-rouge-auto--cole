import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import { getPayments } from "../services/paymentService";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const data = await getPayments();
      setPayments(data);
    };
    fetchPayments();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">المدفوعات</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">المبلغ</th>
              <th className="border p-2">التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{payment.amount} درهم</td>
                <td className="border p-2">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
