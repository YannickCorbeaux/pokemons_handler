import { createServer } from 'node:http';
import app from './app/index.js';
import { config } from './config/env.js';

/**
 * The port number on which the server will listen.
 * @type {number}
 */
const PORT = config.port || 3000;

/**
 * Create the HTTP server using the Express app.
 * @type {import('http').Server}
 */
const httpServer = createServer(app);

/**
 * Start the server and listen on the specified port.
 */
httpServer.listen(PORT, () => {
  console.log(`📡📡 Server running on port ${PORT} 📡📡`);
});

/**
 * Handle server errors.
 * @param {Error & {code?: string}} error - The error object.
 */
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
