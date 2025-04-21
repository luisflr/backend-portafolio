import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo 100 peticiones por IP
  message: {
    status: 429,
    error: 'Se han detectado demasiadas peticiones en un corto periodo de tiempo por lo que se ha bloqueado temporalmente las llamadas. Intente de nuevo mas tarde',
  },
  standardHeaders: true, // Devuelve info en los headers RateLimit-*
  legacyHeaders: false, // Desactiva los headers X-RateLimit-*
});