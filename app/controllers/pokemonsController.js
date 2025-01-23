import success from '../../helpers/successHelper.js';
import pokemonsDataMapper from '../dataMapper/pokemonsDataMapper.js';

/**
 * Class representing the Pokémon controller.
 */
class PokemonsController {
  /**
   * Get all Pokemons from the JSON file (no database at this time).
   * @async
   * @function getAllPokemons
   * @memberof PokemonsController
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {Promise<void>} A promise that resolves when the response is sent.
   */
  async getAllPokemons(req, res) {
    const pokemons = await pokemonsDataMapper.getAllPokemons();
    const message = `There are ${pokemons.length} pokemons in the pokedex, here they are: `;
    res.status(200).json(success(message, pokemons));
  }

  /**
   * Get one Pokemon by ID.
   * @async
   * @function getOnePokemon
   * @memberof PokemonsController
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {Promise<void>} A promise that resolves when the response is sent.
   * @throws {TypeError} If the ID is not a valid number.
   * @throws {Error} If the Pokémon is not found.
   */
  async getOnePokemon(req, res) {
    try {
      const pokemonId = req.pokemonId;
      const pokemon = await pokemonsDataMapper.getOnePokemon(pokemonId);
      const message = `You have selected the Pokémon ${pokemon.name}, here are its details:`;
      if (pokemon) {
        res.status(200).json(success(message, pokemon));
      } else {
        res.status(404).send('Pokemon not found');
      }
    } catch (error) {
      console.error('Error in getOnePokemon', error);
      res.status(500).send('Internal Server Error');
    }
  }

  /**
   * Add a new Pokemon to the JSON file.
   * @async
   * @function addPokemon
   * @memberof PokemonsController
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {Promise<void>} A promise that resolves when the response is sent.
   * @throws {Error} If there is an error adding the Pokémon.
   */
  async addPokemon(req, res) {
    try {
      const newPokemon = req.body;
      await pokemonsDataMapper.addPokemon(newPokemon);
      const message = `The Pokémon ${newPokemon.name} has been successfully added.`;
      res.status(201).json(success(message, newPokemon));
    } catch (error) {
      console.error('Error in addPokemon', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default new PokemonsController();