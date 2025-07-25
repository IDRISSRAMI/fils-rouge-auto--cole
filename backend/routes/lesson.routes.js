import express from 'express';
import { createLesson, getAllLessons } from '../controllers/lesson.controller.js';

const router = express.Router();

// Ajouter une leçon
router.post('/', createLesson);

// Voir toutes les leçons
router.get('/', getAllLessons);

export default router;
