import { PrismaClient } from '@prisma/client';
import PokemonHtmlGenerator from '../../helpers/noHtmlForFun.js';
import success from '../../helpers/successHelper.js';

const prisma = new PrismaClient();

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
      const pokemons = await prisma.pokemon.findMany();
      // const message = `There are ${pokemons.length} pokemons in the pokedex, here they are: `;
      // res.status(200).json(success(message, pokemons));
      // ! WARN - Do not use this in production, it's vulnerable to XSS attacks // it's just for fun because no front at this time the good method is above ----------------------------------
      const message = PokemonHtmlGenerator.generateAllPokemonsHtml(pokemons);
      res.status(200).send(message);
      // ! -----------------------------------------------------------------
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
      const pokemon = await prisma.pokemon.findUnique({
        where: { id: pokemonId },
      });
      if (!pokemon) {
        return res.status(404).send('Pokemon not found');
      }
      // const message = `You have selected the Pokémon ${pokemon.name}, here are its details:`;
      // res.status(200).json(success(message, pokemon));
      // ! WARN - Do not use this in production, it's vulnerable to XSS attacks // it's just for fun because no front at this time the good method is above----------------------------------
      const message = PokemonHtmlGenerator.generatePokemonHtml(pokemon);
      res.status(200).send(message);
      // ! ----------------------------------------------------------------
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
      const newPokemon = await prisma.pokemon.create({
        data: req.body,
      });
      // const message = `The Pokémon ${newPokemon.name} has been successfully added.`;
      // res.status(201).json(success(message, newPokemon));
      // ! WARN - Do not use this in production, it's vulnerable to XSS attacks // it's just for fun because no front at this time the good method is above-----------------------------------
      const message = PokemonHtmlGenerator.generatePokemonCreatedHtml(newPokemon);
      res.status(201).send(message);
      // ! -----------------------------------------------------------------
    }
    catch (error) {
      console.error('Error in addPokemon', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default new PokemonsController();
