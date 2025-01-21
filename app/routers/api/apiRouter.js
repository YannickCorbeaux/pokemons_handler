import express from 'express';
import apiPokemons from './apiPokemons.js';

/**
 * Create a master router for the API.
 * @namespace apiRouter
 */
const apiRouter = express.Router();

/**
 * Use the Pokémon API router for routes starting with /pokemons.
 * @name use/pokemons
 * @function
 * @memberof module:apiRouter
 * @inner
 * @param {import('express').Router} apiPokemons - The router for Pokémon API routes.
 */
apiRouter.use('/pokemons', apiPokemons);

export default apiRouter;
