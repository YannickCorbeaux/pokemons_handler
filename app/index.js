import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import router from './routers/index.js';
import '../config/env.js';

const app = express();

// Just to test the server
app.get('/', (req, res) => {
  res.send('Hello Express 👽');
});

// start the router
app.use(router);

// Middleware global pour la gestion des erreurs
app.use(errorHandler);

export default app;
