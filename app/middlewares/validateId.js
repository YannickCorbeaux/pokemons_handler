// Middleware to validate id from request

export function validateId(req, res, next) {
  const pokemonId = Number.parseInt(req.params.id);
  if (Number.isNaN(pokemonId)) {
    return res.status(400).send('Invalid ID');
  }
  req.pokemonId = pokemonId; // Stock validate id in request
  next();
}
