// routes/auth.routes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import { body } from 'express-validator';

const router = express.Router();

// 🔐 Route d'inscription
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Le nom est requis'),
    body('email').isEmail().withMessage('Email invalide'),
    body('password').isLength({ min: 6 }).withMessage('Mot de passe trop court'),
  ],
  registerUser
);

// 🔑 Route de connexion
router.post('/login', loginUser);

export default router;