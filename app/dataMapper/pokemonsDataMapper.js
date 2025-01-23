import pokemonDataService from '../../services/data.js';

/**
 * Class representing the data mapper for Pokémon data.
 */
class PokemonsDataMapper {
  /**
   * Get all Pokémon from the JSON file.
   * @returns {Promise<object[]>} A promise that resolves to an array of Pokémon objects.
   */
  async getAllPokemons() {
    return await pokemonDataService.readPokemonsFromJson();
  }

  /**
   * Get a single Pokémon by ID.
   * @param {string} id - The ID of the Pokémon to retrieve.
   * @returns {Promise<object>} A promise that resolves to the Pokémon object.
   * @throws {TypeError} If the ID is not a valid number.
   * @throws {Error} If the Pokémon is not found.
   */
  async getOnePokemon(id) {
    try {
      const pokemonId = Number.parseInt(id);
      if (Number.isNaN(pokemonId)) {
        throw new TypeError('Invalid ID');
      }

      const pokemons = await pokemonDataService.readPokemonsFromJson();
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
  }

  /**
   * Add a new Pokémon to the JSON file.
   * @param {object} newPokemon - The new Pokémon to add.
   * @returns {Promise<void>} A promise that resolves when the Pokémon is added.
   */
  async addPokemon(newPokemon) {
    try {
      const pokemons = await pokemonDataService.readPokemonsFromJson();
      pokemons.push(newPokemon);
      await pokemonDataService.writePokemonsToJson(pokemons);
    }
    catch (error) {
      console.error('Error in addPokemon', error);
      throw error;
    }
  }
}

export default new PokemonsDataMapper();
