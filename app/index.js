import express from 'express';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler.js';
import router from './routers/index.js';
import '../config/env.js';

/**
 * Initialize the Express application.
 * @type {import('express').Application}
 */
const app = express();

/**
 * Use the morgan middleware for logging requests.
 * @name use/morgan
 * @function
 * @memberof module:app
 * @inner
 * @param {import('express').RequestHandler} morgan - The morgan middleware.
 */
app.use(morgan('dev'))

/**
 * Serve static files from the 'public' directory.
 * @name use/static
 * @function
 * @memberof module:app
 * @inner
 * @param {string} path - The path to the static files directory.
 */
  .use(express.static('public'));

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
app.use(router)

/**
 * Global error handling middleware.
 * @name use/errorHandler
 * @function
 * @memberof module:app
 * @inner
 * @param {import('express').ErrorRequestHandler} errorHandler - The error handling middleware.
 */
  .use(errorHandler);

export default app;
