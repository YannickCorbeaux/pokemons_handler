import { createServer } from 'node:http';
import process from 'node:process';
import app from './app/index.js';
import './app/helpers/env.load.js';

// Listen on the port defined in the environment variable PORT
const PORT = process.env.PORT || 3000;

// Create the server
const httpServer = createServer(app);

// Listen on the port to teste the server
httpServer.listen(PORT, () => {
  console.log(`📡📡 Server running on port ${PORT} 📡📡`);
});
