import pokemonsDataMapper from '../dataMapper/pokemonsDataMapper.js';

// function to get all Pokemons from my json (no db at this time)
export async function getAllPokemons(req, res) {
  const pokemons = await pokemonsDataMapper.getAllPokemons();
  // send a json with a message contains number of pokemons and the list of their pokemons
  res.json({
    message: `Il y a ${pokemons.length} pokemons dans le pokedex, les voici : `,
    data: pokemons,
  });
}

// function to get one Pokemon by id
export async function getOnePokemon(req, res) {
  try {
    // Use validate id from the middleware
    const pokemonId = req.pokemonId;
    // Get the pokemon by id
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
