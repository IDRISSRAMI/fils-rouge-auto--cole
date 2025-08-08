// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import lessonRoutes from './routes/lesson.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import examRoutes from './routes/exam.routes.js';
import studentRoutes from './routes/student.routes.js';
import instructorRoutes from './routes/instructor.routes.js';
import { startScheduler } from './utils/scheduler.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();
connectDB();
startScheduler();

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/instructors', instructorRoutes);

app.get('/', (req, res) => {
  res.send('🚗 Auto-École Backend is running...');
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// 🔹 إعداد Socket.io
const io = new Server(httpServer, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("✅ Client connecté:", socket.id);
});

// نخلي io متاح في كل controller
app.set("io", io);
