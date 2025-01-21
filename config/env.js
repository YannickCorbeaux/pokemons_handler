// Import the 'process' module from Node.js to access environment variables
import process from 'node:process';

// Import the 'dotenv' package to load environment variables from a .env file into process.env
import dotenv from 'dotenv';

// Load environment variables from the .env file into process.env
dotenv.config();

/**
 * Configuration object containing environment variables.
 * @typedef {object} Config
 * @property {number} port - The port number on which the server will listen.
 */

/**
 * Load environment variables and export the configuration object.
 * @type {Config}
 */
export const config = {
  port: process.env.PORT || 3000,
};
