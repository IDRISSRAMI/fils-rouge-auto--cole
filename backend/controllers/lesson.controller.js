import Lesson from '../models/Lesson.js';

export const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la leçon', error });
  }
};

export const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find().populate('student instructor', 'name email');
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};
