import { Router } from 'express';
import { createLesson, getAllLessons } from '../controllers/lesson.controller.js';
import { verifyToken, requireRole } from '../middlewares/auth.js';
import { body } from 'express-validator';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
  '/',
  verifyToken,
  requireRole('instructor'),
  [
    body('student').notEmpty().withMessage('ID de l’étudiant requis'),
    body('instructor').notEmpty().withMessage('ID de l’instructeur requis'),
    body('date').isISO8601().withMessage('Date invalide'),
    body('duration').isNumeric().withMessage('Durée invalide'),
  ],
  validate,
  createLesson
);

router.get('/', verifyToken,  getAllLessons);

export default router;
