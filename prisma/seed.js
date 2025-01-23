import process from 'node:process';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      {
        name: 'Bulbizarre',
        hp: 25,
        cp: 5,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        types: ['Plante', 'Poison'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Salamèche',
        hp: 28,
        cp: 6,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
        types: ['Feu'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Carapuce',
        hp: 21,
        cp: 4,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
        types: ['Eau'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Aspicot',
        hp: 16,
        cp: 2,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
        types: ['Insecte', 'Poison'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Roucool',
        hp: 30,
        cp: 7,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
        types: ['Normal', 'Vol'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Rattata',
        hp: 18,
        cp: 6,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
        types: ['Normal'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Piafabec',
        hp: 14,
        cp: 5,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
        types: ['Normal', 'Vol'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Abo',
        hp: 16,
        cp: 4,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
        types: ['Poison'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Pikachu',
        hp: 21,
        cp: 7,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
        types: ['Electrik'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Sabelette',
        hp: 19,
        cp: 3,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
        types: ['Normal'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Mélofée',
        hp: 25,
        cp: 5,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
        types: ['Fée'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
      {
        name: 'Groupix',
        hp: 17,
        cp: 8,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
        types: ['Feu'],
        created: new Date('2023-10-10T00:00:00.000Z'),
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
