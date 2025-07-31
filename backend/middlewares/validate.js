// middlewares/validate.middleware.js
import { validationResult } from 'express-validator';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Erreur de validation',
      errors: errors.array(),
    });
  }
  next();
}
