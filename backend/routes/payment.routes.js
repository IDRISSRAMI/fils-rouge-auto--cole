import { Router } from 'express';
import { createPayment, getPayments } from '../controllers/payment.controller.js';
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
    body('amount').isNumeric().withMessage('Montant invalide'),
    body('method').notEmpty(),
  ],
  validate,
  createPayment
);

router.get('/', verifyToken, getPayments);

export default router;
