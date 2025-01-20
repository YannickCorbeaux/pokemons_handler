import express from 'express';
import apiPokemons from './apiPokemons.js';

// Create a master router for the api
const apiRouter = express.Router();

apiRouter.use('/pokemons', apiPokemons);

export default apiRouter;
