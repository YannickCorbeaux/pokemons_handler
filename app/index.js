import express from 'express';
import router from './routers/index.js';
import './helpers/env.load.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express 👽');
});

// on lance le router
app.use(router);

export default app;
