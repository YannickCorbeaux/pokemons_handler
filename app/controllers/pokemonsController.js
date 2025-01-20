// import app from '../app/index.js';

// app.get('/api/pokemons/1', (req, res) => res.send('Hello, Bulbasaur 🌱'));

// export async function getAllPokemons(req, res) {
//   const pokemons = req.params;
//   res.send(`Hello, ${pokemons} 🐉`);
// }

// function to get one Pokemon by id
export function getOnePokemon(req, res) {
  const pokemonId = Number.parseInt(req.params.id);
  res.send(`Hello, vous avez demandé le pokemon numéro ${pokemonId} 🐉`);
}
