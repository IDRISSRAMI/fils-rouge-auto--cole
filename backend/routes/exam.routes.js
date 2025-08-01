import { Router } from 'express';
import { createExam, getExams } from '../controllers/exam.controller.js';
import { verifyToken, requireRole } from '../middlewares/auth.js';
import { body } from 'express-validator';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
  '/',
  verifyToken,
  requireRole('student'), // Ici, c’est le rôle qui peut créer un exam — adapte si besoin (ex: admin ou instructor)
  [
    body('student').notEmpty().withMessage('ID étudiant requis'),
    body('date').isISO8601().withMessage('Date invalide'),
    body('result').isIn(['En attente', 'Réussi', 'Échoué']).withMessage('Résultat invalide'),
  ],
  validate,
  createExam
);

router.get('/', verifyToken, getExams);

export default router;
