import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getNotifications } from "../services/notificationservice";

const socket = io("http://localhost:5000"); // رابط الباك

export default function Navbar() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // جلب الإشعارات أول مرة
    const fetchData = async () => {
      const data = await getNotifications();
      setNotifications(data);
    };
    fetchData();

    // الإستماع للإشعارات الجديدة
    socket.on("new-notification", (message) => {
      setNotifications((prev) => [message, ...prev]);
    });

    return () => {
      socket.off("new-notification");
    };
  }, []);

  return (
    <nav className="flex justify-between items-center bg-blue-600 p-4 text-white">
      <h1 className="text-xl font-bold">Auto École</h1>
      <div className="relative">
        🔔
        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-1">
            {notifications.length}
          </span>
        )}
      </div>
    </nav>
  );
}
