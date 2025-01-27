/**
 * Middleware to handle errors.
 * @param {Error} err - The error object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} _next - The next middleware function (unused).
 */
export default function errorHandler(err, req, res, _next) {
  // Log the error stack trace to the console
  console.error(err.stack);

  // Send a 500 Internal Server Error response with a generic message
  res.status(500).send('Something broke!');
}
