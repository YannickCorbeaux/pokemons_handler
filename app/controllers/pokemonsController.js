import success from '../../helpers/successHelper.js';
import db from '../../models/index.js'; // Assure-toi que le chemin est correct

const { Pokemon } = db; // Extraire le modèle Pokemon de db

/**
 * Class representing the Pokémon controller.
 */
class PokemonsController {
  /**
   * Get all Pokemons from the database.
   * @async
   * @function getAllPokemons
   * @memberof PokemonsController
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {Promise<void>} A promise that resolves when the response is sent.
   */
  async getAllPokemons(req, res) {
    try {
      const pokemons = await Pokemon.findAll();
      const message = `There are ${pokemons.length} pokemons in the pokedex, here they are: `;
      res.status(200).json(success(message, pokemons));
    }
    catch (error) {
      console.error('Error in getAllPokemons', error);
      res.status(500).send('Internal Server Error');
    }
  }

  /**
   * Get one Pokemon by ID.
   * @async
   * @function getOnePokemon
   * @memberof PokemonsController
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {Promise<void>} A promise that resolves when the response is sent.
   * @throws {Error} If the Pokémon is not found.
   */
  async getOnePokemon(req, res) {
    try {
      const pokemonId = Number.parseInt(req.params.id, 10);
      const pokemon = await Pokemon.findByPk(pokemonId);
      if (!pokemon) {
        return res.status(404).send('Pokemon not found');
      }
      const message = `You have selected the Pokémon ${pokemon.name}, here are its details:`;
      res.status(200).json(success(message, pokemon));
    }
    catch (error) {
      console.error('Error in getOnePokemon', error);
      res.status(500).send('Internal Server Error');
    }
  }

  /**
   * Add a new Pokemon to the database.
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
      const newPokemon = await Pokemon.create(req.body);
      const message = `The Pokémon ${newPokemon.name} has been successfully added.`;
      res.status(201).json(success(message, newPokemon));
    }
    catch (error) {
      console.error('Error in addPokemon', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default new PokemonsController();
