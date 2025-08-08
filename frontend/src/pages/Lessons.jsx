import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getLessons } from "../services/lessonService";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const data = await getLessons();
      setLessons(data);
    };
    fetchLessons();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">الدروس</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{lesson.title}</h3>
              <p className="text-sm text-gray-600">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
