import express from 'express';
import * as pokemonsController from '../../controllers/pokemonsController.js';
import { validateId } from '../../middlewares/validateId.js';

const apiPokemons = express.Router();

// await the DB
apiPokemons.route('/')
  .get(pokemonsController.getAllPokemons);

// road to get one pokemon
apiPokemons.route('/:id')
  .get(validateId, pokemonsController.getOnePokemon);

export default apiPokemons;
