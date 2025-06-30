import dotenv from 'dotenv'
dotenv.config();
import { ExtendedClient } from './repositories/client';

export const client = new ExtendedClient();

client.start();