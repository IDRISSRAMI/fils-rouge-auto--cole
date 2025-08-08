import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Lessons from "../pages/Lessons";
import Exams from "../pages/Exams";
import Payments from "../pages/Payments";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../pages/Dashboard/InstructorDashboard";
import StudentDashboard from "../pages/Dashboard/StudentDashboard";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/instructor" element={<InstructorDashboard />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}
