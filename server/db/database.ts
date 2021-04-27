import { Sequelize } from 'sequelize';

import DBInterface from '../types/db';

const DATABASE_NAME: string = 'outturngenerator';

const db: DBInterface = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${ DATABASE_NAME }`,
  {
    logging: false,
  }
);

export default db;