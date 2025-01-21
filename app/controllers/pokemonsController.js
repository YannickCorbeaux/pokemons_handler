import pokemonsDataMapper from '../dataMapper/pokemonsDataMapper.js';

/**
 * Get all Pokemons from the JSON file (no database at this time).
 * @async
 * @function getAllPokemons
 * @memberof module:pokemonsController
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export async function getAllPokemons(req, res) {
  const pokemons = await pokemonsDataMapper.getAllPokemons();
  // Send a JSON response with a message containing the number of Pokemons and the list of their Pokemons
  res.json({
    message: `Il y a ${pokemons.length} pokemons dans le pokedex, les voici : `,
    data: pokemons,
  });
}

/**
 * Get one Pokemon by ID.
 * @async
 * @function getOnePokemon
 * @memberof module:pokemonsController
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export async function getOnePokemon(req, res) {
  try {
    // Use validated ID from the middleware
    const pokemonId = req.pokemonId;
    // Get the Pokemon by ID
    const pokemon = await pokemonsDataMapper.getOnePokemon(pokemonId);
    if (pokemon) {
      res.send(`
        Tu as sélectionné le pokémon ${pokemon.name}, son id est le ${pokemon.id}, 
        il a ${pokemon.hp} points de vie et ${pokemon.cp} points de caractéristiques, 
        enfin il est de type ${pokemon.types[0]}${pokemon.types[1] ? ` et ${pokemon.types[1]}` : ''}.
        <br>Voici à quoi il ressemble : 
        <br><img src="${pokemon.picture}" alt="${pokemon.name}">
        <br> Magnifique n'est-ce pas ? 💩
      `);
      // res.json({
      //   message: `Tu as sélectionné le pokémon ${pokemon.name}, voici ses données :`,
      //   data: pokemon,
      // });
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
