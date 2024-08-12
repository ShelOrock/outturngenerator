import dotenv from "dotenv";

dotenv.config("../.env");

export const 
  databaseDatabase = process.env.DATABASE_DATABASE,
  databaseUsername = process.env.DATABASE_USERNAME,
  databasePassword = process.env.DATABASE_PASSWORD,
  databaseHost = process.env.DATABASE_HOST,
  databaseDialect = process.env.DATABASE_DIALECT;

export const sessionSecret = process.env.SESSION_SECRET;
