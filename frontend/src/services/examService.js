import api from "./api";

// جلب جميع الامتحانات
export const getExams = async () => {
  try {
    const res = await api.get("/exams");
    return res.data;
  } catch (err) {
    console.error("خطأ في جلب الامتحانات:", err);
    return [];
  }
};

// جلب امتحان واحد بالتفصيل
export const getExamById = async (id) => {
  try {
    const res = await api.get(`/exams/${id}`);
    return res.data;
  } catch (err) {
    console.error("خطأ في جلب تفاصيل الامتحان:", err);
    return null;
  }
};
