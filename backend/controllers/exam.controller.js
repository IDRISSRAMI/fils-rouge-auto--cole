// controllers/exam.controller.js
import Exam from '../models/Exam.js';

export const createExam = async (req, res) => {
  try {
    const newExam = new Exam(req.body);
    await newExam.save();
    res.status(201).json(newExam);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de l'examen",
      error: error.message
    });
  }
};

export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find().populate('student');
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des examens",
      error: error.message
    });
  }
};
