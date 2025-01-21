import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import router from './routers/index.js';
import '../config/env.js';

/**
 * Initialize the Express application.
 * @type {import('express').Application}
 */
const app = express();

/**
 * Test route to verify the server is running.
 * @name get/
 * @function
 * @memberof module:app
 * @inner
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */
app.get('/', (req, res) => {
  res.send('Hello Express 👽');
});

/**
 * Use the main router for the application.
 * @name use/router
 * @function
 * @memberof module:app
 * @inner
 * @param {import('express').Router} router - The main router for the application.
 */
app.use(router);

/**
 * Global error handling middleware.
 * @name use/errorHandler
 * @function
 * @memberof module:app
 * @inner
 * @param {import('express').ErrorRequestHandler} errorHandler - The error handling middleware.
 */
app.use(errorHandler);

export default app;
