import express from 'express';
import pageNotFound from '../middlewares/404.js';
import apiRouter from './api/apiRouter.js';

const router = express.Router();

/**
 * Entry point for our API.
 * All roads starting with /api will be redirected to the apiRouter.
 * @name use/apiRouter
 * @function
 * @memberof module:routers
 * @inner
 * @param {import ('express').Router} apiRouter - The router
 */

// Entry point for our Api . localhost:3000/api
router.use('/api', apiRouter);

/**
 * Middleware to handle 404 Not Found errors.
 * This middleware should be used after all other routes to catch any requests
 * that do not match any defined routes.
 * @name use/pageNotFound
 * @function
 * @memberof module:router
 * @inner
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */

// Middleware 404
router.use(pageNotFound);

export default router;
