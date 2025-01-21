import { promises as fs } from 'node:fs';
import path from 'node:path';

/**
 * The path to the JSON file containing the Pokémon data.
 * @type {string}
 */
const jsonFilePath = path.resolve('app/data/pokemons.json');

/**
 * Reads the Pokémon data from the JSON file.
 * @returns {Promise<object[]>} A promise that resolves to an array of Pokémon objects.
 * @throws {Error} If there is an error reading or parsing the file.
 */
export async function readPokemonsFromJson() {
  const data = await fs.readFile(jsonFilePath, 'utf-8');
  return JSON.parse(data);
}
