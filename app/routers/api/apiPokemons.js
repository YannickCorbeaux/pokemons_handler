import express from 'express';
import * as pokemonsController from '../../controllers/pokemonsController.js';

const apiPokemons = express.Router();

// await the DB
// apiPokemons.route('/pokemons')
//   .get(pokemonsController.getAllPokemons);

// road to get one pokemon
apiPokemons.route('/:id')
  .get(pokemonsController.getOnePokemon);

export default apiPokemons;
