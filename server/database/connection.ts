import { Dialect, Sequelize } from 'sequelize';

import * as configVariables from "../../config";

const connection: Sequelize = new Sequelize(
  configVariables.databaseDatabase,
  configVariables.databaseUsername,
  configVariables.databasePassword, {
    host: configVariables.databaseHost,
    dialect: configVariables.databaseDialect as Dialect,
    logging: false,
  }
);

export default connection;