export class CustomError extends Error {
  httpStatusCode: number
  timestamp: string
  documentationUrl?: string

  constructor(
    httpStatusCode: number,
    message: string = 'A generic error occurred!',
    documentationUrl?: string
  ) {
    super(message)
    this.httpStatusCode = httpStatusCode
    this.timestamp = new Date().toISOString()
    this.documentationUrl = documentationUrl

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    Object.setPrototypeOf(this, CustomError.prototype)
  }
}
