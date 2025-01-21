import express from 'express';
import router from './routers/index.js';
import './helpers/env.load.js';

const app = express();

// Just to test the server
app.get('/', (req, res) => {
  res.send('Hello Express 👽');
});

// start the router
app.use(router);

export default app;
