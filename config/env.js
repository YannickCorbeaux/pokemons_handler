import process from 'node:process';
// on importe les variables d'environnement .
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
};
