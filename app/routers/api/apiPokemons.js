import express from 'express';
import * as pokemonsController from '../../controllers/pokemonsController.js';
import { validateId } from '../../middlewares/validateId.js';

const apiPokemons = express.Router();

/**
 * Route to get all Pokémon.
 * @name get/pokemons
 * @function
 * @memberof module:apiPokemons
 * @inner
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */
apiPokemons.route('/')
  .get(pokemonsController.getAllPokemons);

/**
 * Route to get a single Pokémon by ID.
 * @name get/pokemons/:id
 * @function
 * @memberof module:apiPokemons
 * @inner
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */
apiPokemons.route('/:id')
  .get(validateId, pokemonsController.getOnePokemon);

export default apiPokemons;
