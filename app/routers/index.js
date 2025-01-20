import express from 'express';
import pageNotFound from '../middlewares/404.js';
import apiRouter from './api/apiRouter.js';

const router = express.Router();

// Entry point for our Api . localhost:3000/api
router.use('/api', apiRouter);

// Middleware 404
router.use(pageNotFound);

export default router;
