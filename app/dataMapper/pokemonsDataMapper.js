import { readPokemonsFromJson } from '../../config/data.js';

const pokemonsDataMapper = {
  async getAllPokemons() {
    return await readPokemonsFromJson();
  },
  async getOnePokemon(id) {
    try {
      // Entry validation
      const pokemonId = Number.parseInt(id);
      if (Number.isNaN(pokemonId)) {
        throw new TypeError('Invalid ID');
      }

      // Read data from the Json file
      const pokemons = await readPokemonsFromJson();

      // Find the pokemon by id
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
