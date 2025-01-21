import { createServer } from 'node:http';
import app from './app/index.js';
import { config } from './config/env.js';

// Listen on the port defined in the environment variable PORT
const PORT = config.port || 3000;

// Create the server
const httpServer = createServer(app);

// Listen on the port to test the server
httpServer.listen(PORT, () => {
  console.log(`📡📡 Server running on port ${PORT} 📡📡`);
});

// Handle server errors
httpServer.on('error', (error) => {
  switch (error.code) {
  case 'EADDRINUSE':
    console.error(`Port ${PORT} is already in use`);
    break;
  case 'EACCES':
    console.error(`Permission denied for port ${PORT}`);
    break;
  case 'ENOTFOUND':
    console.error('Hostname not found');
    break;
  case 'ECONNRESET':
    console.error('Connection reset by peer');
    break;
  case 'ECONNREFUSED':
    console.error('Connection refused');
    break;
  default:
    console.error('Server error:', error);
  }
});
