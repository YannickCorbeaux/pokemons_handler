import { promises as fs } from 'node:fs';
import path from 'node:path';

const jsonFilePath = path.resolve('app/data/pokemons.json');

async function readPokemonsFromJson() {
  const data = await fs.readFile(jsonFilePath, 'utf-8');
  return JSON.parse(data);
}

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
