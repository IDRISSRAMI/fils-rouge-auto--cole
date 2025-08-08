import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getExams } from "../services/examService";

export default function Exams() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const data = await getExams();
      setExams(data);
    };
    fetchExams();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">الامتحانات</h2>
        <ul className="space-y-4">
          {exams.map((exam) => (
            <li
              key={exam.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{exam.name}</h3>
              <p className="text-sm text-gray-600">تاريخ: {exam.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
