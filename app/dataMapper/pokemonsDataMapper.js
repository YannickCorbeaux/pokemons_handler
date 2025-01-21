import { readPokemonsFromJson } from '../../config/data.js';

/**
 * Data mapper for Pokémon data.
 * @namespace pokemonsDataMapper
 */
const pokemonsDataMapper = {
  /**
   * Get all Pokémon from the JSON file.
   * @returns {Promise<object[]>} A promise that resolves to an array of Pokémon objects.
   */
  async getAllPokemons() {
    return await readPokemonsFromJson();
  },

  /**
   * Get a single Pokémon by ID.
   * @param {string} id - The ID of the Pokémon to retrieve.
   * @returns {Promise<object>} A promise that resolves to the Pokémon object.
   * @throws {TypeError} If the ID is not a valid number.
   * @throws {Error} If the Pokémon is not found.
   */
  async getOnePokemon(id) {
    try {
      // Entry validation
      const pokemonId = Number.parseInt(id);
      if (Number.isNaN(pokemonId)) {
        throw new TypeError('Invalid ID');
      }

      // Read data from the JSON file
      const pokemons = await readPokemonsFromJson();

      // Find the Pokémon by ID
      const pokemon = pokemons.find(poke => poke.id === pokemonId);

      if (!pokemon) {
        throw new Error('Pokemon not found');
      }

      return pokemon;
    }
    catch (error) {
      console.error('Error in getOnePokemon', error);
      throw error;
    }
  },
};

export default pokemonsDataMapper;
