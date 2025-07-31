import { Router } from 'express';
import { createStudent, getAllStudents } from '../controllers/student.controller.js';
import { verifyToken, requireRole } from '../middlewares/auth.js';
import { body } from 'express-validator';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
  '/',
  verifyToken,
  requireRole('admin'),
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('phone').notEmpty(),
  ],
  validate,
  createStudent
);

router.get('/', verifyToken, getAllStudents);

export default router;
