/**
 * Middleware to handle errors.
 * @param {Error} err - The error object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} _next - The next middleware function (unused).
 */
export function errorHandler(err, req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}
