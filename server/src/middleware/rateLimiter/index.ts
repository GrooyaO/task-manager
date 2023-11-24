import express from 'express'
import rateLimit from 'express-rate-limit'

// Rate limit middleware
export default function rateLimiter(app: express.Application) {
  const rateLimitMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    message: 'You have exceeded your 30 requests per 15 minute window.',
    headers: true,
    legacyHeaders: false,
  })
  app.use(rateLimitMiddleware)
}
