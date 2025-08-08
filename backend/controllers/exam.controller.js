// controllers/exam.controller.js
import Exam from '../models/Exam.js';
import { sendEmail } from '../utils/sendEmail.js';
import { sendSMS } from '../utils/sendSMS.js';

export const createExam = async (req, res) => {
  try {
    let newExam = new Exam(req.body);

    // Populate student info
    newExam = await newExam.populate('student', 'email phone name');

    await newExam.save();

    const studentEmail = newExam.student?.email;
    const studentPhone = newExam.student?.phone;

    const message = `Bonjour ${newExam.student?.name}, un nouvel examen est planifié pour le ${newExam.date.toLocaleDateString()}. Bon courage!`;

    // Send email + SMS
    if (studentEmail) await sendEmail(studentEmail, 'Nouvel examen planifié', message);
    if (studentPhone) await sendSMS(studentPhone, message);

    // ✅ Emit socket notification
    if (req.io) {
      req.io.emit('notification', {
        type: 'exam',
        message: `Nouvel examen prévu pour ${newExam.date.toLocaleDateString()}`,
        data: newExam
      });
    }

    res.status(201).json(newExam);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de l'examen",
      error: error.message,
    });
  }
};

export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find().populate('student', 'name email phone');
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des examens",
      error: error.message,
    });
  }
};
