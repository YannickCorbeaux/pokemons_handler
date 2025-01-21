/**
 * Middleware to validate the ID from the request.
 *
 * This middleware checks if the ID provided in the request parameters is a valid number.
 * If the ID is valid, it is stored in the request object; otherwise, a 400 Bad Request response is sent.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
export function validateId(req, res, next) {
  const pokemonId = Number.parseInt(req.params.id);
  if (Number.isNaN(pokemonId)) {
    return res.status(400).send('Invalid ID');
  }
  req.pokemonId = pokemonId; // Store validated ID in request
  next();
}
