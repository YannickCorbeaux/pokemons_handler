import { promises as fs } from 'node:fs';
import path from 'node:path';

/**
 * Class representing the data service for Pokémon data.
 */
class PokemonDataService {
  /**
   * The path to the JSON file containing the Pokémon data.
   * @type {string}
   */
  constructor() {
    this.jsonFilePath = path.resolve('app/data/pokemons.json');
  }

  /**
   * Reads the Pokémon data from the JSON file.
   * @returns {Promise<object[]>} A promise that resolves to an array of Pokémon objects.
   * @throws {Error} If there is an error reading or parsing the file.
   */
  async readPokemonsFromJson() {
    const data = await fs.readFile(this.jsonFilePath, 'utf-8');
    return JSON.parse(data);
  }

  /**
   * Writes the Pokémon data to the JSON file.
   * @param {object[]} pokemons - An array of Pokémon objects to write to the file.
   * @returns {Promise<void>} A promise that resolves when the data is written to the file.
   * @throws {Error} If there is an error writing to the file.
   */
  async writePokemonsToJson(pokemons) {
    const data = JSON.stringify(pokemons, null, 2);
    await fs.writeFile(this.jsonFilePath, data, 'utf-8');
  }
}

export default new PokemonDataService();
