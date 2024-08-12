import Sequelize from "sequelize"

import connection from "../connection";

import { CaskModelStatic } from "../../types/models/index";

const CaskDefinition = <CaskModelStatic>connection.define("cask", {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },

  caskPosition: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  },

  caskNumber: {
    type: Sequelize.STRING,
  },

  name: {
    type: Sequelize.STRING,
  },

  price: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  flavorProfile: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  age: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: ""
  },

  date: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: ""
  },

  region: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  caskType: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  abv: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  bottleCount: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  allocation: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  description: {
    type: Sequelize.TEXT,
    defaultValue: ""
  },
});

export default CaskDefinition;
