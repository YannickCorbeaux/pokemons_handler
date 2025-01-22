import success from '../../helpers/helpers.js';
import pokemonsDataMapper from '../dataMapper/pokemonsDataMapper.js';

/**
 * Get all Pokemons from the JSON file (no database at this time).
 * @async
 * @function getAllPokemons
 * @memberof module:pokemonsController
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export async function getAllPokemons(req, res) {
  const pokemons = await pokemonsDataMapper.getAllPokemons();
  const message = `Il y a ${pokemons.length} pokemons dans le pokedex, les voici : `;
  // Send a JSON response with a message containing the number of Pokemons and the list of their Pokemons
  res.status(200).json(success(message, pokemons));
}

/**
 * Get one Pokemon by ID.
 * @async
 * @function getOnePokemon
 * @memberof module:pokemonsController
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 * @throws {TypeError} If the ID is not a valid number.
 * @throws {Error} If the Pokémon is not found.
 */
export async function getOnePokemon(req, res) {
  try {
    // Use validated ID from the middleware
    const pokemonId = req.pokemonId;
    // Get the Pokemon by ID
    const pokemon = await pokemonsDataMapper.getOnePokemon(pokemonId);
    // Answer message if success
    const message = `Tu as sélectionné le pokémon ${pokemon.name}, voici ses données :`;
    if (pokemon) {
      res.status(200).json(success(message, pokemon));
    }
    else {
      res.status(404).send('Pokemon not found');
    }
  }
  catch (error) {
    console.error('Error in getOnePokemon', error);
    res.status(500).send('Internal Server Error');
  }
}
