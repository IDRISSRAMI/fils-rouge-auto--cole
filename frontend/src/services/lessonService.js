import api from "./api";

// جلب جميع الدروس
export const getLessons = async () => {
  try {
    const res = await api.get("/lessons");
    return res.data;
  } catch (err) {
    console.error("خطأ في جلب الدروس:", err);
    return [];
  }
};

// جلب درس واحد بالتفصيل
export const getLessonById = async (id) => {
  try {
    const res = await api.get(`/lessons/${id}`);
    return res.data;
  } catch (err) {
    console.error("خطأ في جلب تفاصيل الدرس:", err);
    return null;
  }
};
