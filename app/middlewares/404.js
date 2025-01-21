/**
 * Middleware to handle 404 Not Found errors.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */
export default function pageNotfound(req, res) {
  res.status(404).json({ error: 'Resource not found 404' });
}
