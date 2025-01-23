import Joi from 'joi';

/**
 * Middleware to validate the Pokémon data in the request body.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
export function validatePokemon(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    hp: Joi.number().required(),
    cp: Joi.number().required(),
    picture: Joi.string().uri().required(),
    types: Joi.array().items(Joi.string()).required(),
    created: Joi.date().iso(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  req.body = value;
  next();
}
