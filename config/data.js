import { promises as fs } from 'node:fs';
import path from 'node:path';

const jsonFilePath = path.resolve('app/data/pokemons.json');

export async function readPokemonsFromJson() {
  const data = await fs.readFile(jsonFilePath, 'utf-8');
  return JSON.parse(data);
}
