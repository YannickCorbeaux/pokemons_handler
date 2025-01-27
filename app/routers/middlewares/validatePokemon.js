import Joi from 'joi';

/**
 * Middleware to validate the Pokémon data in the request body.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
export function validatePokemon(req, res, next) {
  // Define the schema for validating the Pokémon data
  const schema = Joi.object({
    name: Joi.string().required(), // Name is required and must be a string
    hp: Joi.number().required(), // HP is required and must be a number
    cp: Joi.number().required(), // CP is required and must be a number
    picture: Joi.string().uri().required(), // Picture is required and must be a valid URI
    types: Joi.array().items(Joi.string()).required(), // Types is required and must be an array of strings
    created: Joi.date().iso(), // Created is optional but must be a valid ISO date if provided
  });

  // Validate the request body against the schema
  const { error, value } = schema.validate(req.body);

  // If validation fails, return a 400 Bad Request response with the validation error message
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // If validation succeeds, replace the request body with the validated value and call the next middleware
  req.body = value;
  next();
}
