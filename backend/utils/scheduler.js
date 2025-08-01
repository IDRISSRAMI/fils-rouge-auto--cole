import cron from 'node-cron';
import { sendEmail } from './sendEmail.js';
import { sendSMS } from './sendSMS.js';
import Exam from '../models/Exam.js';


export const startScheduler = () => {
  console.log('📅 Scheduler started');

  // Chaque jour à 08h
  cron.schedule('0 8 * * *', async () => {
    const today = new Date().toISOString().split('T')[0];

    try {
      const exams = await Exam.find({
        date: {
          $gte: new Date(today + 'T00:00:00'),
          $lt: new Date(today + 'T23:59:59'),
        },
      }).populate('student', 'name email phone');

      for (const exam of exams) {
        const { name, email, phone } = exam.student;

        const message = `Bonjour ${name}, vous avez un examen aujourd'hui à ${exam.date.toLocaleTimeString()}`;

        await sendEmail(email, '📅 Rappel Examen', `<p>${message}</p>`);
        await sendSMS(phone, message);
      }
    } catch (err) {
      console.error('❌ Erreur scheduler:', err.message);
    }
  });
};
