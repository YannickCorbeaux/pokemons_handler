import pokemonsDataMapper from '../dataMapper/pokemonsDataMapper.js';

// function to get all Pokemons from my json (no db at this time)
export async function getAllPokemons(req, res) {
  const pokemons = await pokemonsDataMapper.getAllPokemons();
  res.json(pokemons);
}

// function to get one Pokemon by id
export async function getOnePokemon(req, res) {
  try {
    const pokemonId = req.pokemonId; // Use validate id from the middleware
    const pokemon = await pokemonsDataMapper.getOnePokemon(pokemonId);
    if (pokemon) {
      res.json(pokemon);
    }
    else {
      res.status(404).send('Pokemon not found');
    }
  }
  catch (error) {
    console.error('Error in getOnePokemon', error);
    res.status(500).send('Internal Server Error');
  }
}
