import { Sequelize } from 'sequelize';

import DBInterface from '../types/db';

const DATABASENAME: string = 'outturngenerator';

const db: DBInterface = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${ DATABASENAME }`,
  {
    logging: false,
  }
);

export default db;