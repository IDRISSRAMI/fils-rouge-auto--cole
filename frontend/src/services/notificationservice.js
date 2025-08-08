import api from "./api";

// جلب جميع الإشعارات
export const getNotifications = async () => {
  try {
    const res = await api.get("/notifications");
    return res.data;
  } catch (err) {
    console.error("خطأ في جلب الإشعارات:", err);
    return [];
  }
};

// تعليم الإشعار كمقروء
export const markNotificationAsRead = async (id) => {
  try {
    const res = await api.put(`/notifications/${id}/read`);
    return res.data;
  } catch (err) {
    console.error("خطأ في تحديث الإشعار:", err);
    return null;
  }
};
