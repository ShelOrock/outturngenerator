import { Sequelize } from 'sequelize';

import DBInterface from '../types/db';

const DATABASE_NAME: string = 'outturngenerator';

const db: DBInterface = process.env.DATABASE_URL
  ? new Sequelize(
    process.env.DATABASE_URL,
      {
        logging: false,
        dialect: 'postgres',
        dialectOptions: {
          ssl: { rejectUnauthorized: false }
        }
      }
    )
  : new Sequelize(
    `postgres://localhost:5432/${ DATABASE_NAME }`,
      {
        logging: false,
      }
    )

export default db;