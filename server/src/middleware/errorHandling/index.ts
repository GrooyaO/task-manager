import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../../errors/customError' // Adjust the import path as needed

interface ErrorResponse {
  message: string
  timestamp?: string
  documentationUrl?: string
  stackTrace?: string
}

function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let httpStatusCode = 500
  let message = 'Internal Server Error'
  let timestamp: string | undefined
  let documentationUrl: string | undefined
  let stackTrace: string | undefined

  if (err instanceof CustomError) {
    httpStatusCode = err.httpStatusCode
    message = err.message
    timestamp = err.timestamp
    documentationUrl = err.documentationUrl
  } else if (typeof err === 'string') {
    message = err
  } else if (err instanceof Error) {
    message = err.message
    stackTrace = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  }

  console.error(err)

  const errorResponse: ErrorResponse = {
    message,
    timestamp,
    documentationUrl,
    stackTrace,
  }

  res.status(httpStatusCode).json({ error: errorResponse })

  next(err)
}

export { errorHandler }
