import { Router } from 'express';
import { createInstructor, getAllInstructors } from '../controllers/instructor.controller.js';
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
  createInstructor
);

router.get('/', verifyToken, getAllInstructors);

export default router;
