// !  THIS FUNCTION IS HERE JUST FOR FUN. I DON'T USE FRONT AT THIS TIME'

class PokemonHtmlGenerator {
  static generatePokemonHtml(pokemon) {
    return `
      <html>
        <head>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }
            .pokemon-details {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .pokemon-info {
              margin-bottom: 20px;
            }
            .pokemon-picture img {
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          <div class="pokemon-details">
            <div class="pokemon-info">
              <h1>You have selected the Pokémon ${pokemon.name}, here are its details:</h1>
              <p>ID: ${pokemon.id}</p>
              <p>Name: ${pokemon.name}</p>
              <p>HP: ${pokemon.hp}</p>
              <p>CP: ${pokemon.cp}</p>
              <p>Types: ${pokemon.types.join(', ')}</p>
              <p>Created: ${pokemon.created}</p>
            </div>
            <div class="pokemon-picture">
              <img src="${pokemon.picture}" alt="${pokemon.name}">
            </div>
          </div>
        </body>
      </html>
    `;
  }

  static generateAllPokemonsHtml(pokemons) {
    const pokemonHtml = pokemons.map(pokemon => `
      <div class="pokemon-details">
        <div class="pokemon-info">
          <h2>${pokemon.name}</h2>
          <p>ID: ${pokemon.id}</p>
          <p>HP: ${pokemon.hp}</p>
          <p>CP: ${pokemon.cp}</p>
          <p>Types: ${pokemon.types.join(', ')}</p>
          <p>Created: ${pokemon.created}</p>
        </div>
        <div class="pokemon-picture">
          <img src="${pokemon.picture}" alt="${pokemon.name}">
        </div>
      </div>
    `).join('');

    return `
      <html>
        <head>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0;
              padding: 20px;
            }
            .pokemon-details {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              margin-bottom: 20px;
              padding: 20px;
              border: 1px solid #ccc;
              border-radius: 10px;
              background-color: rgba(255, 255, 255, 0.8);
            }
            .pokemon-info {
              margin-bottom: 20px;
            }
            .pokemon-picture img {
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          <h1>All Pokemons in the Pokedex</h1>
          ${pokemonHtml}
        </body>
      </html>
    `;
  }

  static generatePokemonCreatedHtml(pokemon) {
    return `
      <html>
        <head>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }
            .pokemon-details {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .pokemon-info {
              margin-bottom: 20px;
            }
            .pokemon-picture img {
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          <div class="pokemon-details">
            <div class="pokemon-info">
              <h1>The Pokémon ${pokemon.name} has been successfully added!</h1>
              <p>ID: ${pokemon.id}</p>
              <p>Name: ${pokemon.name}</p>
              <p>HP: ${pokemon.hp}</p>
              <p>CP: ${pokemon.cp}</p>
              <p>Types: ${pokemon.types.join(', ')}</p>
              <p>Created: ${pokemon.created}</p>
            </div>
            <div class="pokemon-picture">
              <img src="${pokemon.picture}" alt="${pokemon.name}">
            </div>
          </div>
        </body>
      </html>
    `;
  }
}

export default PokemonHtmlGenerator;
