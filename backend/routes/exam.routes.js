import { Router } from 'express';
import { createExam, getExams } from '../controllers/exam.controller.js';
import { verifyToken, requireRole } from '../middlewares/auth.js';
import { body } from 'express-validator';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
  '/',
  verifyToken,
  requireRole('student'),
  [
    body('student').notEmpty(),
    body('date').isISO8601(),
    body('result').isIn(['En attente', 'Réussi', 'Échoué']),
  ],
  validate,
  createExam
);

router.get('/', verifyToken, getExams);

export default router;
