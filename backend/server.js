// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import lessonRoutes from './routes/lesson.routes.js';
import paymentRoutes from './routes/payment.routes.js';
// Charger .env
dotenv.config();

// Connexion DB
connectDB();

// Initialiser Express
const app = express();

// Middleware JSON
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/payments', paymentRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('🚗 Auto-École Backend is running...');
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

